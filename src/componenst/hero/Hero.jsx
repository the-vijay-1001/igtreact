import "./hero.css"


function Hero() {
    return <>
        {/* <div class="container">
            <div class="dot-overlay"></div>
            <header>
                <div class="logo">👑 Lordguru</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Advertise</a>
                    <a href="#">Supports</a>
                    <a href="#">Contact</a>
                </nav>
                <a href="#" class="try-free-btn">Try for Free</a>
            </header>
            <div class="content">
                <div class="left-content">
                    <div class="rating">⭐⭐⭐⭐ Trusted by over 4,337 students</div>
                    <h1>Learn Design<br />with <span class="highlight">Nia Matos</span></h1>
                    <p>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
                    <div class="search-bar">
                        <input type="text" placeholder="Search Course Name" />
                        <button>🔍</button>
                    </div>
                    <div class="sponsors">
                        <span className="my-2 text-xs">Sponsored by:</span>
                        <div className="flex">
                            <img src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_640.png" alt="Paypal" />
                            <img src="data:image/png;base64,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" alt="Google" />
                            <img src="data:image/png;base64,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" alt="Dropbox" />
                        </div>
                    </div>
                </div>
                <div class="right-content">
                    <img src="/placeholder.svg?height=400&width=400" alt="Woman with laptop" />
                </div>
            </div>
        </div> */}
        <div class="container">
            <header>
                <div class="logo">Landguru</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Advertise</a>
                    <a href="#">Supports</a>
                    <a href="#">Contact</a>
                </nav>
                <a href="#" class="try-free">Try for Free</a>
            </header>
            <main>
                <div class="content">

                    <div class="rating">★★★★☆</div>
                    <h1>Learn Design<br />with <span class="underline">Nia Matos</span></h1>
                    <p>Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                    <div class="search-bar">
                        <input type="text" placeholder="Search Course Name" />
                        <button>🔍</button>
                    </div>
                    <div class="sponsors">
                        <p className="text-sm">Sponsored by:</p>
                        <div class="sponsor-logos flex">
                            <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                            <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                            <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg" alt="Dropbox" />
                        </div>
                    </div>
                </div>

                <div class="image-container">
                    {/* <iframe width="100%" height="360" src="https://www.youtube.com/embed/WO2b03Zdu4Q" allowfullscreen></iframe> */}
                    <video class="h-fit w-fit rounded-lg" controls>
                        <source
                            src="https://docs.material-tailwind.com/demo.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div class="play-buttons"></div>
                    <div class="dots"></div>
                </div>

            </main>
        </div>

    </>
}


export default Hero;