import axios from "axios";
import React, { useEffect, useState } from "react";

function useGithub(user) {
    const [gituser, setGituser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    async function getUserDetails() {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`https://api.github.com/users/${user}`);
        setGituser(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getUserDetails();
    }, [user]);

    return {gituser,loading,error}
  
}

export default useGithub