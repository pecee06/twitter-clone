function createFeeds() {
    const feeds = [
        {
            hashtag: "AgainstDharaviProject",
            reposts: 1873
        },
        {
            hashtag: "CBNKilledNTR",
            reposts: 2464
        },
        {
            hashtag: "Patna",
            reposts: 3972
        },
        {
            hashtag: "RamMandir",
            reposts: 4831
        },
        {
            hashtag: "RepublicDay",
            reposts: 3638
        }
    ]
    
    const feeds_html = feeds.map(obj => (
        `<div class="feed">
            <div class="flex justify-between">
                <span class="sub-text">Trending in India</span>
                <img src="./assets/svgs/more_horiz_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="cursor-pointer invert">
            </div>
            <p class="font-bold">#${obj.hashtag}</p>
            <p class="sub-text">${obj.reposts} posts</p>
        </div>`
    ))
    
    feeds_html.forEach(feed => {
        document.querySelector("#feeds").innerHTML += feed
    })
}
createFeeds()


function createInfluencers() {
    const influencers = [
        {
            name: "Visit Maldives",
            handle: "visitmaldives"
        },
        {
            name: "Richa Singh",
            handle: "RichaSingh243"
        },
        {
            name: "Aamir Khan",
            handle: "aamirkhan"
        },
        {
            name: "Aditi Rao Hydari",
            handle: "aditiraohydari"
        },
        {
            name: "Ajay Devgn",
            handle: "ajaydevgn"
        },
        {
            name: "Akshay Kumar",
            handle: "akshaykumar"
        }
    ]
    
    const influencers_html = influencers.map(obj => (
        `<div class="influencer flex items-center justify-between">
            <div>
                <p class="text-base">${obj.name}</p>
                <p class="sub-text">@${obj.handle}</p>
            </div>
            <button class="follow-btn text-sm px-4">Follow</button>
        </div>`
    ))
    
    influencers_html.forEach(influencer => {
        document.querySelector("#influencers").innerHTML += influencer
    }) 
}
createInfluencers()

function createPosts() {
    const posts = [
        {
            name: "Massimo",
            handle: "Rainmaker1973",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repudiandae distinctio, magni reiciendis quos voluptatem praesentium accusamus possimus veritatis, voluptas atque ducimus ad, error non! Veniam sunt possimus quos natus",
            url: "./assets/imgs/sea.jpg"
        },
        {
            name: "Salvatore",
            handle: "lasventauras1992",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repudiandae distinctio",
            url: "./assets/imgs/dog.jpg"
        },
        {
            name: "RJ Jizzy",
            handle: "IAmJizzy",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repudiandae distinctio, magni reiciendis quos voluptatem praesentium accusamus possimus veritatis",
            url: "./assets/imgs/banana.jpg"
        },
        {
            name: "Pluto",
            handle: "dwarfplanet",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repudiandae distinctio, magni reiciendis",
            url: "./assets/imgs/orange.jpg"
        },
        {
            name: "Harry",
            handle: "hiroshinohara",
            description: "Lorem ipsum dolor sit amet consectetur",
            url: "./assets/imgs/open.jpg"
        }
    ]

    const posts_html = posts.map(obj => (
        `<div class="post bg-gray-900 rounded-xl">
            <div class="top flex justify-between box">
                <div>
                    <span>${obj.name}</span>
                    <span>@${obj.handle}</span>
                </div>
                <img src="./assets/svgs/more_horiz_FILL0_wght400_GRAD0_opsz24.svg" alt="" class="invert cursor-pointer">
            </div>
            <div class="p-2">
                <p class="desc px-2 py-5">${obj.description}</p>
                <img src="${obj.url}" alt="" class="post-pic rounded-bl-xl rounded-br-xl">
            </div>
        </div>`
    ))

    posts_html.forEach(post => {
        document.querySelector("#posts").innerHTML += post
    })
}
createPosts()