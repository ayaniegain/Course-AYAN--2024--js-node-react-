import useGithub from "../hooks/useGithub";

function GithubUser({ user }) {
 let  {gituser,loading,error} =useGithub(user)
  return (
    <>
      {loading && <h2>Loading.......</h2>}
      {error && <h2>{error.message}</h2>}
      {gituser && (
        <div className="text-center flex flex-col items-center">
          <h2>ID: {gituser.login}</h2>
          <img
            src={gituser.avatar_url}
            alt="User Avatar"
            className="h-40 w-40 rounded-[50%]"
          />
          <p>Location: {gituser.location}</p>
        </div>
      )}
    </>
  );
}

export default GithubUser;
