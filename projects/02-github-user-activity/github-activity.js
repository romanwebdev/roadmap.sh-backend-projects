const username = process.argv[2];

if (!username) {
  console.log('Please enter a username');
  return;
}

const fetchUserActivity = async () => {
  try {
    const url = `https://api.github.com/users/${username}/events`;
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found. Please check the username.');
      } else {
        throw new Error(`Fetching data error: ${response.status}`);
      }
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const showActivity = async () => {
  const events = await fetchUserActivity(username);
  if (!events.length) {
    console.log('Events not found');
    return;
  }

  events.forEach((event) => {
    switch (event.type) {
      case 'PushEvent':
        const commitCount = event.payload.commits.length;
        console.log(
          `- Pushed ${commitCount} commit(s) to ${event.repo.name}\n`
        );
        break;
      case 'IssuesEvent':
        console.log(`- Opened a new issue in ${event.repo.name}\n`);
        break;
      case 'WatchEvent':
        console.log(`- Starred ${event.repo.name}\n`);
        break;
      case 'ForkEvent':
        console.log(`- Forked ${event.repo.name}\n`);
        break;
      case 'CreateEvent':
        console.log(
          `- Created ${event.payload.ref_type} in ${event.repo.name}\n`
        );
        break;
      default:
        console.log(`- ${event.type} in ${event.repo.name}\n`);
        break;
    }
  });
};

showActivity();
