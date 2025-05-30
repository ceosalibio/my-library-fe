import axios from "axios";

const instance = axios.create({
    baseURL: "",
    timeout: 150000,
    headers: {
        'x-api-key': 'SECRET_KEY', // Add your API key here
    },
});

// Store ongoing request controllers
const controllers = new Map();

// Request Interceptor
instance.interceptors.request.use(
    (config) => {
        if (!window.navigator.onLine) {
            return Promise.reject(new Error("Check Your Internet Connection"));
        }

        // const user = getItem("user");

        // if (user?.token) {
        //     config.headers.Authorization = `Bearer ${user.token}`;
        //     config.headers.Accept = `application/json`;
        // }
        

        // Cancel previous request if the same URL is already being requested
        if (controllers.has(config.url)) {
            controllers.get(config.url).abort(); // Cancel previous request
        }

        // Create a new AbortController and attach it to the request
        const controller = new AbortController();
        config.signal = controller.signal;
        controllers.set(config.url, controller);

        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
instance.interceptors.response.use(
    (response) => {
        controllers.delete(response.config.url);
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized (Logout User)
        if (error.response?.status === 401) {
            localStorage.clear();
            window.location.href = "/";
        }

        // Handle 429 Too Many Requests with Retry (Exponential Backoff)
        if (error.response?.status === 429) {
            console.warn("Rate limit hit, retrying...");
            const retryAfter = error.response.headers["retry-after"] || 2000; // Default to 2s if header not available
            await new Promise((resolve) => setTimeout(resolve, retryAfter));
            return instance(originalRequest); // Retry request
        }

        controllers.delete(originalRequest.url);
        return Promise.reject(error);
    }
);

export default instance;


