let base_url;

if (import.meta.env.VITE_API_URL) {
    base_url = import.meta.env.VITE_API_URL;
} else {
    base_url = "http://localhost:8080/";
}

export const url_tasks = base_url + "tasks/";
export const url_users = base_url + "users/";
export const url_users_tasks = base_url + "usersTasks/";

export const url_assign_task_to_user = url_users_tasks + "assign/";
