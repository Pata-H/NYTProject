var beginYear = "&begin_date=";
var beginMonth = "0101"
var endYear = "&end_date=";
var endMonth = "1231"
var searchTerm = "&q=";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=285f60c591b149798efb85d7cb467bdb";
//templateliterals <-- look into this
//var queryURL = url+searchTerm+beginYear+beginMonth+endYear+endMonth;
console.log(queryURL);

$('.getQuery').click(function(){
    searchTerm += $('.searchTerm').val();
    startYear += $('.startYear').val();
    endYear += $('.endYear').val();
    var queryURL = url+searchTerm+beginYear+beginMonth+endYear+endMonth;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET", 
    }).done(function(response){
        for(i = 0; i <docs.length; i++) {
        var story = $("<span>")
        var title = response.docs[i].headline.main;
        story.attr("class", "story");
        story.append("<h1><a src='" + response.docs[i].web_url + "'>" + title + "' </a></h1>");
        story.append(response.docs[i].abstract);
        $("#storySection").prepend(story);
        console.log(response);
        }
    })
})