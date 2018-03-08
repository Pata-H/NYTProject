var beginYear = "&begin_date=";
var beginMonth = "0101"
var endYear = "&end_date=";
var endMonth = "1231"
var searchTerm = "&q=";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=285f60c591b149798efb85d7cb467bdb";

//var queryURL = url+searchTerm+beginYear+beginMonth+endYear+endMonth;
console.log(queryURL);

$('.getQuery').click(function(){
    searchTerm += $('.searchTerm').val();
    startYear += $('.startYear').val();
    endYear += $('.endYear').val();
    var queryURL = url+searchTerm+beginYear+beginMonth+endYear+endMonth;

    $.ajax({
        url: queryURL,
        method: "GET", 
    }).done(function(response){
        var story = $("<span>")
        var title = response.docs.headline.main;
        story.attr("class", "story");
        story.append("<h1><a> " + title + " src='" + response.docs.web_url + "' </a></h1>");
        story.append(response.docs.abstract);
        $("#storySection").prepend(story);
    })
})