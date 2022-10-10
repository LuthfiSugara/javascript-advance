$('.search-button').on('click', function(){
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=9fb0c570&s=' + $('.input-keyword').val(),
        success: (data) => {
            const movies = data.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
    
            $('.movie-container').html(cards);
    
            $('.modal-detail-button').on('click', function(){
                let id = $(this).data('imdbid');
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=9fb0c570&i=' + id,
                    success: (m) => {
                        const movieDetail = showMovieDetail(m);
    
                        $('.modal-body').html(movieDetail);
                    }, error: () => {
                        console.log(err);
                    }
                });
            })
    
        },error: (err) => {
            console.log(err);
        }
    });
});



$.ajax({
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=9fb0c570&s=avenger',
    success: (data) => {
        const movies = data.Search;
        let cards = '';
        movies.forEach(m => {
            cards += showCards(m);
        });

        $('.movie-container').html(cards);

        $('.modal-detail-button').on('click', function(){
            let id = $(this).data('imdbid');
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=9fb0c570&i=' + id,
                success: (m) => {
                    const movieDetail = showMovieDetail(m);

                    $('.modal-body').html(movieDetail);
                }, error: () => {
                    console.log(err);
                }
            });
        })

    },error: (err) => {
        console.log(err);
    }
});


function showCards(m){
    return `<div class="col-md-4 my-3">
        <div class="card">
            <img src="${m.Poster}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movie-detail" data-imdbid="${m.imdbID}">Show Details</a>
            </div>
        </div>
    </div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
        <div class="row">
            <div class="col-3">
                <img src="${m.Poster}" class="img-fluid">
            </div>
            <div class="col-9">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
                </ul>
            </div>
        </div>
    </div>`
}