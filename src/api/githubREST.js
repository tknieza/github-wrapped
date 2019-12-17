const githubREST = (event, username, setUserData, history) => {
  let userData = {};
  event.preventDefault();
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => {
      userData.metadata = json;

      // Followers
      fetch(json.followers_url)
        .then(res => res.json())
        .then(json => {
          userData.followers = json;
        })
        .catch(console.error);

      // Following
      fetch(`https://api.github.com/users/${username}/following`)
        .then(res => res.json())
        .then(json => {
          userData.following = json;
        })
        .catch(console.error);

      // Subscriptions
      fetch(json.subscriptions_url)
        .then(res => res.json())
        .then(json => {
          userData.subscriptions = json;
        })
        .catch(console.error);

      // Organizations
      fetch(json.organizations_url)
        .then(res => res.json())
        .then(json => {
          userData.organizations = json;
        })
        .catch(console.error);

      // Repos
      fetch(json.repos_url)
        .then(res => res.json())
        .then(json => {
          userData.repos = json;
        })
        .catch(console.error);

      // Received Events
      fetch(json.received_events_url)
        .then(res => res.json())
        .then(json => {
          userData.received_events = json;
        })
        .catch(console.error);

      // Starred
      fetch(`https://api.github.com/users/${username}/starred`)
        .then(res => res.json())
        .then(json => {
          userData.starred = json;
        })
        .catch(console.error);

      // Gists
      fetch(`https://api.github.com/users/${username}/gists`)
        .then(res => res.json())
        .then(json => {
          userData.gists = json;
        })
        .catch(console.error);
    })
    .catch(console.error)
    .finally(() => {
      console.log(userData);
      setUserData(userData);
      history("/summary");
    });
};

export default githubREST;
