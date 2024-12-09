const fetchUsersWithFilters = async ({ username, location, repoCount }) => {
    try {
        const query = `q=${username}+location:${location}+repos:>${repoCount}`;
        const response = await axios.get(`https://api.github.com/search/users?${query}`);
        return response.data.items;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

export { fetchUserData, fetchUsersWithFilters };
