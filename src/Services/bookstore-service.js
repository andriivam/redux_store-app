
function BookstoreService() {
    const data = [
        {
            id: 1,
            title: 'Harry Potter and Chamber of Secrets',
            author: 'Joanne Rowling',
            price: 32,
            coverImg: 'https://kbimages1-a.akamaihd.net/a659c00c-c0d1-4c2c-bf55-316bf227a6b0/353/569/90/False/harry-potter-and-the-chamber-of-secrets-5.jpg'
        },
        {
            id: 2,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 45,
            coverImg: 'https://m.media-amazon.com/images/I/51oxXEG6TRL.jpg'
        }
    ];
    const getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(data);
                }
            }, 700);
        }
        );
    };
    return {
        getBooks
    };

}
export default BookstoreService;