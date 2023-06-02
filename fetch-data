async function fetchData(url) {
            try {
                const response = await fetch('https://corsproxy.io/?' + encodeURIComponent(url));

                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('An error occurred:', error);
                return null;
            }
        }


        async function getJSONs(url) {
            try {
                const data = await fetchData(url);
                return data;
            } catch (error) {
                return error;
            }
        }
