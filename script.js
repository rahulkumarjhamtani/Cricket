    // Get the modal
    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    
    var over = parseFloat(document.getElementById('over').innerText);
    var totalRun = 0;
    var wicket = 0;
    var fours = 0;
    var sixes = 0;
    var strike = 0;
    var balls = 0;
    var economy = 0;
    
    function myScore()
    {
        console.log(document.getElementsByClassName('newBatsman'));
        console.log(document.getElementsByClassName('newBowler'));
    
        var batsman = document.getElementsByClassName('newBatsman');
        var bowler = document.getElementsByClassName('newBowler');
    
        for(var i=0;i<batsman.length;i++)
        {
            console.log('Batsman ', batsman[i].innerText);
        }
    
        for(var i=0;i<bowler.length;i++)
        {
            console.log('Bowler ', bowler[i].innerText);
        }
    
        var score = parseInt(document.getElementById('score').value);
        if( score==0 || score==1 || score==2 || score==3 || score==4 || score==6 || document.getElementById('score').value=='w')
        {
            if( document.getElementById('score').value=='w')
            {
                wicket += 1;
                console.log('Wicket =',wicket);
                document.getElementById('totalWicket').innerHTML = wicket;
                score = 0;
            }
            if(score==4)
            {
                fours += 1;
            }
            if(score==6)
            {
                sixes += 1;
            }
            var newBall = parseFloat(over);
    
            newBall = parseFloat(over) + 0.1;
            over = newBall.toFixed(1);
            if( (((((over)*10)-6)%10) == 0) )
            {
                newBall = parseFloat(over) + 1 - 0.6;
                over = newBall.toFixed(1);
                console.log("Over =",over);
                document.getElementById('over').innerHTML = over;
                document.getElementById('totalOver').innerHTML = over;
                balls++;
            }
            else
            {
                console.log("Over =",over);
                document.getElementById('over').innerHTML = over;
                document.getElementById('totalOver').innerHTML = over;
                balls++;
            }
    
            console.log('Run = ',score);
            totalRun += score;
        }
        else
        {
            alert('Enter a Valid Score');
            return;
            
            
        }
        strike = parseInt((totalRun / balls) * 100);
        console.log('Total =',totalRun);
        economy = parseInt((totalRun / balls) * 6);
        document.getElementById('totalRun').innerHTML = totalRun;
        document.getElementById('playerRun').innerHTML = totalRun;
        document.getElementById('playerBalls').innerHTML = balls;
        document.getElementById('playerFours').innerHTML = fours;
        document.getElementById('playerSixes').innerHTML = sixes;
        document.getElementById('playerStrikeRate').innerHTML = strike;
    
        document.getElementById('playerRuns').innerHTML = totalRun;
        document.getElementById('playerOver').innerHTML = over;
        document.getElementById('playerWicket').innerHTML = wicket;
        document.getElementById('playerEconomy').innerHTML = economy;
    
    }
    
    
    function newField() {
      modal.style.display = "none";
      modal2.style.display = "block";
    }
    
    var labelName = '';
    var labelValue = 0;
    function addField() {
    
        labelName = document.getElementById("labelName").value;
        let labelVal = document.getElementsByName("labelType")[0];
        let labelType = labelVal.options[labelVal.selectedIndex].text;
        console.log(labelType);
    
        if(labelType == 'Batsman')
        {
            label1 = document.createElement("tr");
            document.getElementById("batsman").appendChild(label1);
            label2 = document.createElement("td");
            label2.appendChild(document.createTextNode(labelName));
            label2.setAttribute("name", 'newBatsman');
            label2.setAttribute("class", 'newBatsman');
            document.getElementById("batsman").appendChild(label2);
            label3 = document.createElement("td");
            label3.appendChild(document.createTextNode(labelValue));
            document.getElementById("batsman").appendChild(label3);
            label4 = document.createElement("td");
            label4.appendChild(document.createTextNode(labelValue));
            document.getElementById("batsman").appendChild(label4);
            label5 = document.createElement("td");
            label5.appendChild(document.createTextNode(labelValue));
            document.getElementById("batsman").appendChild(label5);
            label6 = document.createElement("td");
            label6.appendChild(document.createTextNode(labelValue));
            document.getElementById("batsman").appendChild(label6);
            label7 = document.createElement("td");
            label7.appendChild(document.createTextNode(labelValue));
            document.getElementById("batsman").appendChild(label7);
        }
        if(labelType == 'Bowler')
        {
            label1 = document.createElement("tr");
            document.getElementById("bowler").appendChild(label1);
            label2 = document.createElement("td");
            label2.appendChild(document.createTextNode(labelName));
            label2.setAttribute("name", 'newBowler');
            label2.setAttribute("class", 'newBowler');
            document.getElementById("bowler").appendChild(label2);
            label3 = document.createElement("td");
            label3.appendChild(document.createTextNode(labelValue));
            document.getElementById("bowler").appendChild(label3);
            label4 = document.createElement("td");
            label4.appendChild(document.createTextNode(labelValue));
            document.getElementById("bowler").appendChild(label4);
            label5 = document.createElement("td");
            label5.appendChild(document.createTextNode(labelValue));
            document.getElementById("bowler").appendChild(label5);
            label6 = document.createElement("td");
            label6.appendChild(document.createTextNode(labelValue));
            document.getElementById("bowler").appendChild(label6);
            label7 = document.createElement("td");
        }
    
      modal2.style.display = "none";
      modal.style.display = "none";
    }
    
    function cancelField() {
      modal.style.display = "none";
      modal2.style.display = "none";
    }