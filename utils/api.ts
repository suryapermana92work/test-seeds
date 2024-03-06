const basePath = "https://finnhub.io/api/v1";

export const fetchNews = async () => {
  const url = `${basePath}/news?category=general&limit=10&token=cnk2hv1r01qvd1hlt9k0cnk2hv1r01qvd1hlt9kg`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
