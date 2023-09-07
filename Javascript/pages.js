let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');
// console.log(search_input);

left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})
// copy the json file from the movie.json add new movies in up side the json file
let json_url = "./JSON/movie.json";

fetch(json_url).then(Response => Response.json()).then((data) => {
    data.forEach((ele, i) => {

        let { name, imdb, date, sposter, bposter, season, type, url } = ele;
        // card create
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p> ${type} ${season} ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                </div>
            </div>
        </div>
        `
        cards.appendChild(card);
    })

    // Paragraph change later

    // document.getElementById('title').innerText = data[0].name;
    // document.getElementById('gen').innerText = data[0].type;
    // document.getElementById('date').innerText = data[0].date;
    // document.getElementById('rate').innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}`;

    //Search data load
    data.forEach(element => {
        let { name, imdb, date, sposter, type, url, time } = element;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="${name}">
        <div class="cont">
            <h3>${name}</h3>
            <p>${type}, ${date}, ${time}<span> IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</p>
        </div>
       
        `
        search.appendChild(card);
    })
    //search filter
    search_input.addEventListener('keyup', () => {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');
        console.log(a);

        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];
            // console.log(a.textContent) 
            let TextValue = b.textContent || b.innerText;
            if (TextValue.toUpperCase().indexOf(filter) > -1) {
                a[index].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            }
            else {
                a[index].style.display = "none";
            }
            if (search_input.value == 0) {
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }

        }
    })

    // let video = document.getElementsByTagName('video')[0];
    // let play = document.getElementById('play');

    // play.addEventListener('click', () => {
    //     if (video.paused) {
    //         video.play();
    //         play.innerHTML = `Pause <i class="bi bi-pause-circle-fill"></i>`
   
    //     }
    //     else {
    //         video.pause();

    //         play.innerHTML = `Play <i class="bi bi-play-circle-fill"></i>`
    //     }
    // })

    let action = document.getElementById('action');
    let fantasy = document.getElementById('fantasy');
    let movies = document.getElementById('movies');
    let romance = document.getElementById('romance');

    action.addEventListener('click', () => {
        cards.innerHTML = '';


        let action_array = data.filter(ele => {
            return ele.type === "Action";
        });


        // for anime search

        action_array.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, season, type, url } = ele;
            // card create
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p> ${type}, ${season}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                </div>
            </div>
        </div>
            `
            cards.appendChild(card);
        })

    })


    // for movies search

    movies.addEventListener('click', () => {
        cards.innerHTML = '';


        let movies_array = data.filter(ele => {
            return ele.type === "Movie";
        });

        movies_array.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, type, url } = ele;
            // card create
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p> ${type}, ${date}</p>
                        <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                    </div>
                </div>
            </div>
            `
            cards.appendChild(card);
        })


    })
    fantasy.addEventListener('click', () => {
        cards.innerHTML = '';


        let fantasy_array = data.filter(ele => {
            return ele.type === "Fantasy";
        });



        // for Fantasy anime search

        fantasy_array.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, season, genre, url } = ele;
            // card create
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p> ${genre} ${season} ${date}</p>
                        <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                    </div>
                </div>
            </div>
            `
            cards.appendChild(card);
        })


    })

    romance.addEventListener('click', () => {
        cards.innerHTML = '';


        let romance_array = data.filter(ele => {
            return ele.type === "Romance";
        });



        // for Fantasy anime search

        romance_array.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, season, genre, url } = ele;
            // card create
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p> ${genre} ${season} ${date}</p>
                        <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</h3>
                    </div>
                </div>
            </div>
            `
            cards.appendChild(card);
        })


    })

});