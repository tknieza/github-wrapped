async function githubREST(event, username, setUserData, history) {
  let userData = {};

  event.preventDefault();

  if (username.length < 1) {
    return;
  }

  await fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => {
      userData.metadata = json;
    })
    .catch(console.error)
    .finally(() => {
      // Checking if user is found
      if (!userData.metadata || userData.metadata.message === "Not Found") {
        return;
      }

      // Followers
      fetch(userData.metadata.followers_url)
        .then(res => res.json())
        .then(json => {
          userData.followers = json;
        })
        .catch(console.error)
        .finally(() => {
          // Following
          fetch(`https://api.github.com/users/${username}/following`)
            .then(res => res.json())
            .then(json => {
              userData.following = json;
            })
            .catch(console.error)
            .finally(() => {
              // Subscriptions
              fetch(userData.metadata.subscriptions_url)
                .then(res => res.json())
                .then(json => {
                  userData.subscriptions = json;
                })
                .catch(console.error)
                .finally(() => {
                  // Organizations
                  fetch(userData.metadata.organizations_url)
                    .then(res => res.json())
                    .then(json => {
                      userData.organizations = json;
                    })
                    .catch(console.error)
                    .finally(() => {
                      // Repos
                      fetch(userData.metadata.repos_url)
                        .then(res => res.json())
                        .then(json => {
                          userData.repos = json;
                        })
                        .catch(console.error)
                        .finally(() => {
                          // Received Events
                          fetch(userData.metadata.received_events_url)
                            .then(res => res.json())
                            .then(json => {
                              userData.received_events = json;
                            })
                            .catch(console.error)
                            .finally(() => {
                              // Starred
                              fetch(
                                `https://api.github.com/users/${username}/starred`
                              )
                                .then(res => res.json())
                                .then(json => {
                                  userData.starred = json;
                                })
                                .catch(console.error)
                                .finally(() => {
                                  // Gists
                                  fetch(
                                    `https://api.github.com/users/${username}/gists`
                                  )
                                    .then(res => res.json())
                                    .then(json => {
                                      userData.gists = json;
                                    })
                                    .catch(console.error)
                                    .finally(() => {
                                      console.log(userData);
                                      setUserData(userData);
                                      history("/summary");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

export default githubREST;
