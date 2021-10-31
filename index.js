
        var count = 1;
        var api_key = "c16cb19662a447c39a3840d54b085f3d";
        window.addEventListener('load', function(){
            getNews();
            
        })

        function getNews(){
            fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`)
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                response = response.articles;
                console.log(response[0])
                postNews(response);
            })
            .catch(function(err){

            })
        }

        function postNews(newsData){
            var page = document.getElementById('page');
            page.textContent = "";

            var container = document.createElement('div');
            container.setAttribute('id', 'container')

            for(let i = 0; i < 10; i++){
                if(i === 0){
                var top = document.createElement('div');
                top.style.flexBasis = '100%';
                top.style.height = '550px';
                top.style.zIndex = -1;
                top.style.position = 'relative'

                var img = document.createElement('img');
                img.src = newsData[i].urlToImage;
                img.style.width = '100%';
                img.style.height = '550px';

                var hoverDiv = document.createElement('div');
                hoverDiv.setAttribute('id', 'hoverDiv');
                

                var headline = document.createElement('h1');
                headline.textContent = newsData[i].title;
                headline.style.margin = '100px 0px 0px 50px';
                headline.style.width = '50%'
                headline.style.fontSize = '40px'

                var content = document.createElement('p');
                content.textContent = newsData[i].content;
                content.style.margin = '20px 50px';
                content.style.width = '50%'
                

                var detail1 = document.createElement('h3');
                detail1.textContent = `Author -  ${newsData[i].author}`;
                detail1.style.margin = '20px 50px';
                detail1.style.width = '50%'

                var detail2 = document.createElement('h4');
                detail2.textContent = `Published At -  ${newsData[i].publishedAt}`;
                detail2.style.margin = '20px 50px';
                detail2.style.width = '50%'

                hoverDiv.append(headline, content, detail1, detail2);
                top.append(img, hoverDiv);
                container.appendChild(top);
                count++;
                }

                else{
                    var top = document.createElement('div');
                    top.setAttribute('id', 'flexDivs');

                    var img = document.createElement('img');
                    img.src = newsData[i].urlToImage;
                    img.setAttribute('class', 'img');

                    var div = document.createElement('div');
                    div.style.margin = '10px' 

                    var headline = document.createElement('h3');
                    headline.textContent = newsData[i].title;

                    var content = document.createElement('p');
                    content.textContent = newsData[i].content;  
                    content.style.margin = '10px 0'                  

                    var detail1 = document.createElement('h4');
                    detail1.textContent = `Author -  ${newsData[i].author}`;

                    var detail2 = document.createElement('h4');
                    detail2.textContent = `Published At -  ${newsData[i].publishedAt}`;

                    div.append(headline, content, detail1, detail2);
                    top.append(img, div)
                    container.appendChild(top);
                    count++;

                }
            }

            page.appendChild(container)
            
        }
