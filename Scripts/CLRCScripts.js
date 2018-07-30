        function checkMoreAbawd(array) {
            if (array.length == 0) {
                alert('No more ABAWD members to process.')
            }
        }
        
        function buildAbawdArray(c, d, array1, array2) {
            array2.length = 0;
            for (i = 0; i < array1.length; i++) {
                if (document.getElementById('abawd' + c + 'Name' + i).checked == false) {
                    array2.push(array1[i]);
                }
            }
            return(array2);
        }

        Element.prototype.remove = function() {
            this.parentElement.removeChild(this);
        }
        NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
            for(var i = this.length - 1; i >= 0; i--) {
                if(this[i] && this[i].parentElement) {
                    this[i].parentElement.removeChild(this[i]);
                }
            }
        }
        
        function getabawdName(d, array) {
            document.getElementById('incomeSpan').innerHTML=abawdIncomeEquiv;
            document.getElementById('abawdDiv' + d + '0').style.display = "none";
            document.getElementById('abawd' + d + 'NextDiv').style.display = "none";
            var abwdDiv1 = document.getElementById('abawdDiv' + d + '0');
            var ad1 = abwdDiv1.getElementsByTagName("input").length;
            var al1 = abwdDiv1.getElementsByTagName("label").length;
            if (ad1 > 0) {
                for (i=0; i < ad1; i++) {
                abwdDiv1.getElementsByTagName("input")[0].remove();
            }
        }
            if (al1 > 0) {
                for (i=0; i < al1; i++) {
                abwdDiv1.getElementsByTagName("label")[0].remove();
            }
        }
            for (i = 0; i < array.length; i++) {
                abwdDiv1.style.display = "inline";
                var adata1 = document.createElement("label");
                adata1.type = "checkbox";
                adata1.id = ('abawd' + d + 'Label' + i);
                adata1.innerHTML = array[i];
                var adata2 =  document.createElement("input");
                adata2.type = "checkbox";
                adata2.id = ('abawd' + d + 'Name' + i);
                var abdBns = document.getElementById('abawd' + d + 'Bonus');
                if (abdBns !== null) {
                adata2.onclick = function() {showMe('abawd' + d + 'Bonus', this);};
            }
                abwdDiv1.appendChild(adata1);
                adata1.appendChild(adata2);
                document.getElementById('abawd'+ d + 'NextDiv').style.display = "inline";
            }
        }
    
        function showColumn(it, box) {
            var vis = (box.checked) ? "block" : "none";
            var x = document.getElementsByClassName(it);
            for (i = 0; i < x.length; i++) {
                x[i].style.display = vis;
        }
    }
    
        function showMe(it, box) {
            var vis = (box.checked) ? "block" : "none";
            document.getElementById(it).style.display = vis;
        }
    
        //Depreciated as now procedurally generating rows.
        //function showRows(row) {
        //    var result_style = document.getElementById(row).style;
        //    result_style.display = 'table-row';
        //}
    
        function hideIt(it, box) {
            var invis = (box.checked) ? "none" : "block";
            document.getElementById(it).style.display = invis;
        }
    
        function intvReset(it, box) {
            document.getElementById('intvNeedYes').checked = false;
            document.getElementById('intvNeedNo').checked = false;
            var invis = (box.checked) ? "none" : "block";
            document.getElementById(it).style.display = invis;
            document.getElementById('interviewNeeded1').style.display = invis;
            document.getElementById('intvAttemptYes1').style.display = invis;
        }
    
        function auto_grow(element) {
            element.style.height = "5px";
            element.style.height = (element.scrollHeight) + "px";
        }
    
        function benefitsApplied() {
            var fab = document.getElementById("fa").checked;
            var cab = document.getElementById("tca").checked;
            var mab = document.getElementById("meds").checked;
            var caType = document.getElementById("typeTCA1").value;
            var intCheck = document.querySelector('input[name="int"]:checked');
            var intvd = document.querySelector('input[name="int"]:checked').value;
            var cmnAr = document.getElementById("commonArea");
            var wrapAr = document.getElementById("wrapUpArea");
            var clrcText = document.getElementById("clrcPasteInfo");
            document.getElementById("demo").innerHTML = fab;
            if (intCheck == false) {
                alert("Please enter a selection for 'Interview Completed?'");
            }
            cmnAr.style.display = "block";
            wrapAr.style.display = "block";
            clrcText.style.display = "block";
        }
    
        function getSections() {
            var fab = document.getElementById("fa").checked;
            var cab = document.getElementById("tca").checked;
            var mab = document.getElementById("meds").checked;
            if (cab == false) {
                document.getElementById("typeTCA1").value = "none"
            }
            var caType = document.getElementById("typeTCA1").value;
            var cmnAr = document.getElementById("commonArea");
            var wrapAr = document.getElementById("wrapUpArea");
            var clrcText = document.getElementById("clrcPasteInfo");
            var intvArea = document.getElementById("interviewArea");
            var faArea = document.getElementById("foodAssistArea");
            var medArea = document.getElementById("medicaidArea");
            var regArea = document.getElementById("regularTCA");
            var caretakerArea = document.getElementById("caretakerTCAArea");
            var rapArea = document.getElementById("rapTCAArea");
            var intCheck = document.querySelector('input[name="int"]:checked');
            if (intCheck == null) {
                alert("Please enter a selection for 'Interview Completed?'");
                return;
            }
            else {
                var intvd = document.querySelector('input[name="int"]:checked').value;
            }
            intvArea.style.display = "none";
            faArea.style.display = "none";
            medArea.style.display = "none";
            regArea.style.display = "none";
            caretakerArea.style.display = "none";
            rapArea.style.display = "none";
            cmnAr.style.display = "none";
            wrapAr.style.display = "none";
            clrcText.style.display = "none";
            if (intvd == 'Yes') {
                intvArea.style.display = "block";
            };
            if (fab == true) {
                faArea.style.display = "block";
            };
            if (mab == true) {
                medArea.style.display = "block";
            };
            if (caType == "tca") {
                regArea.style.display = "block";
            };
            if (caType == "caretakerTCA") {
                caretakerArea.style.display = "block";
            };
            if (caType == "rap") {
                rapArea.style.display = "block";
            };
            cmnAr.style.display = "block";
            wrapAr.style.display = "block";
            clrcText.style.display = "block";
        }
    
        function createArray() {
            var hhNameArray = [];
            var table = document.getElementById("hhCompTable");
            var rows = table.getElementsByTagName("tr")
            for (i = 0; i < rows.length-1; i++) {
                if (document.getElementById('name' + (i + 1)).value != "") {
                    hhNameArray.push(document.getElementById('name' + (i + 1)).value);
                }
            };
            var hhAgeArray = [];
            for (o = 0; o < rows.length-1; o++) {
                if (document.getElementById('name' + (o + 1)).value != "") {
                    hhAgeArray.push(document.getElementById('age' + (o + 1)).value);
                }
            };
            var hhAppArray = [];
            for (p = 0; p < rows.length-1; p++) {
                if (document.getElementById('name' + (p + 1)).value != "") {
                    hhAppArray.push(document.getElementById('apply' + (p + 1)).checked);
                }
            }
            var hhPPArray = [];
            for (a = 0; a < rows.length-1; a++) {
                if (document.getElementById('name' + (a + 1)).value != "") {
                    hhPPArray.push(document.getElementById('pandp' + (a + 1)).checked);
                }
            }
            var hhDisqArray = [];
            for (s = 0; s < rows.length-1; s++) {
                if (document.getElementById('name' + (s + 1)).value != "") {
                    hhDisqArray.push(document.getElementById('disq' + (s + 1)).checked);
                }
            }
            var hhDisabArray = [];
            for (d = 0; d < rows.length-1; d++) {
                if (document.getElementById('name' + (d + 1)).value != "") {
                    hhDisabArray.push(document.getElementById('disab' + (d + 1)).checked);
                }
            }
            var childMember = hhAgeArray.some(function(e) {
                return e < 18;
            });
            var abawdMember = hhAgeArray.some(function(e) {
                return e < 49 && e > 18;
            });
            var dddAgeMember = hhAgeArray.some(function(e) {
                return e < 65;
            });
            var disqMember = hhDisqArray.some(function(e) {
                return e == true;
            });
            var applyMember = hhAppArray.some(function(e) {
                return e == true;
            });
            var dddMember = hhDisabArray.some(function(e) {
                return e == true;
            });
            var fab = document.getElementById("fa").checked;
            if (fab == true && abawdMember == true && childMember == false) {
                document.getElementById("abawdStuff").style.display = "block";
            }
            else {document.getElementById("abawdStuff").style.display = "none";
        }
            var mab = document.getElementById("meds").checked;
            if (mab == true && dddAgeMember == true && childMember == false && applyMember == true && dddMember == true) {
                document.getElementById("dddScreening").style.display = "block";
            }
            else {document.getElementById("dddScreening").style.display = "none";
        }
            if (abawdMember == true) {
                document.getElementById("ABAWDStateSect").style.display = "block";
            }
            else {document.getElementById("ABAWDStateSect").style.display = "none";
        }
        }
    
        function createDDD() {
            var table = document.getElementById("hhCompTable");
            var rows = table.getElementsByTagName("tr");
            for (h = 0; h < rows.length-1; h++) {
                var dddName = document.getElementById('name' + (h + 1)).value;
                var dddUnder65 = document.getElementById('age' + (h + 1)).value;
                var dddApply = document.getElementById('apply' + (h + 1)).checked;
                var dddDisab = document.getElementById('disab' + (h + 1)).checked;
                if (dddName != "" && dddUnder65 < 65 && dddApply == true && dddDisab == true && dddBuilt == false) {
                    var iLab = document.createElement("label");
                    iLab.type = 'checkbox';
                    iLab.id = 'dddQuestA' + h;
                    var iIn = document.createElement("input");
                    iIn.className = 'dddList';
                    iIn.type = 'checkbox';
                    iIn.id = 'dddScreenA' + h;
                    document.getElementById('dddQuest1').appendChild(iLab);
                    document.getElementById('dddQuest1').appendChild(iIn);
                    document.getElementById('dddQuestA' + h).innerHTML = dddName;
                    var jLab = document.createElement("label");
                    jLab.type = 'checkbox';
                    jLab.id = 'dddQuestB' + h;
                    var jIn = document.createElement("input");
                    jIn.className = 'dddList';
                    jIn.type = 'checkbox';
                    jIn.id = 'dddScreenB' + h;
                    document.getElementById('dddQuest2').appendChild(jLab);
                    document.getElementById('dddQuest2').appendChild(jIn);
                    document.getElementById('dddQuestB' + h).innerHTML = dddName;
                    var kLab = document.createElement("label");
                    kLab.type = 'checkbox';
                    kLab.id = 'dddQuestC' + h;
                    var kIn = document.createElement("input");
                    kIn.className = 'dddList';
                    kIn.type = 'checkbox';
                    kIn.id = 'dddScreenC' + h;
                    document.getElementById('dddQuest3').appendChild(kLab);
                    document.getElementById('dddQuest3').appendChild(kIn);
                    document.getElementById('dddQuestC' + h).innerHTML = dddName;
            }
        }
        return(dddBuilt = true)
        }
    
        function checkDDD() {
            var allDDD = document.getElementById('dddScreening').getElementsByClassName('dddList');
            var dddLength = (allDDD.length/3);
            potenDDD = [];
            for (i = 0; i < dddLength; i++) {
                var dddA = document.getElementById('dddScreenA' + i).checked
                var dddB = document.getElementById('dddScreenB' + i).checked
                var dddC = document.getElementById('dddScreenC' + i).checked
                var dddMem = "";
                if (dddA == false && dddB == false && dddC == false) {
                    dddName = document.getElementById('dddQuestA' + i).innerHTML;
                    potenDDD.push(dddName);
                }
            }
            if (potenDDD.length == 1) {
                dddMem = potenDDD + " appears to be potential DDD.";
                alert(dddMem);
                }
            if (potenDDD.length > 1) {
                dddMem = potenDDD + " appear to be potential DDD.";
                alert(dddMem);
                }
            return(potenDDD);
        }
    
        function abawdData() {
            var hhNameArray = [];
            var hhAgeArray = [];
            var table = document.getElementById("hhCompTable");
            var rows = table.getElementsByTagName("tr");
            abawdMembList.length=0;
            for (i = 0; i < rows.length-1; i++) {
                if (document.getElementById('name' + (i + 1)).value != "") {
                    hhNameArray.push(document.getElementById('name' + (i + 1)).value);
                }

            };
            for (o = 0; o <  rows.length-1; o++) {
                if (document.getElementById('name' + (o + 1)).value != "") {
                    hhAgeArray.push(document.getElementById('age' + (o + 1)).value);
                }

            };
            var childMember = hhAgeArray.some(function(e) {
                return e < 18;
            });
            for (a = 0; a < hhNameArray.length; a++) {
                if (childMember == false) {
                    if (hhAgeArray[a] < 49 && hhAgeArray[a] > 18) {
                        abawdMembList.push(hhNameArray[a]);
                    }
                }
            }
            return (abawdMembList);
        }
    
        function sliceCLRC() {
            var clrcTxt = document.getElementById("clrcInfo").value;
            var start = 0;
            var end = 720;
            for (start, i = 1; start < clrcTxt.length; start = end + 1, end = end + 721, i++) {
                clrcSection = clrcTxt.substring(start, end);
                if (document.getElementById('browserType1').checked == true) {
                    document.getElementById("clrcBucket" + i).style.display = "none";
                    alert(clrcSection);
                } else {
                    document.getElementById("clrcBucket" + i).style.display = "block";
                    document.getElementById("clrcBucket" + i).value = clrcSection;
                    document.getElementById("clrcBucket" + i).focus();
                }
            }
        }
    
        function authentCheck() {
            var authOpt = document.getElementById("authent").value;
            if (authOpt != "Automatic" && authOpt != "none") {
                document.getElementById("authenDisc").style.display = "block";
            } else {
                document.getElementById("authenDisc").style.display = "none"
            }
        }
    
        function buildAbawdMems(array) {
            abawdMemsList = [];
            for (i = 0; i < array.length; i++) {
                if (document.getElementById('abawdIName' + i).checked == false) {
                        abawdMemsList.push(array[i]);
                }
            }
            if (abawdMemsList.length == 1) {
                abawdMem = abawdMemsList + " appears to be an ABAWD Member (AGPI: 18 Y)";
                alert(abawdMem);
            }
            if (abawdMemsList.length > 1) {
                abawdMem = abawdMemsList + " appear to be ABAWD Members (AGPI: 18 Y)";
                alert(abawdMem);
            }
            return (abawdMemsList, abawdMem);
        }
        
        function abawdHourChangeCheck(array) {
            for (i = 0; i < array.length; i++) {
                var wrk1 = document.getElementById('abawdEName' + i).checked;
                var wrk2 = document.getElementById('abawdIName' + i).checked;
                var wrk2 = document.getElementById('abawdIName' + i).checked;
                if (wrk1 == true) {
                    document.getElementById('abawdWorking').style.display = "inline";
                }
                else if (wrk2 != null) {
                    wrk2 = document.getElementById('abawdIName' + i).checked;
                    if (wrk2 == true) {
                        document.getElementById('abawdWorking').style.display = "inline";
                    }
                    else {
                        document.getElementById('abawdWorking').style.display = "none";
                    }
                }
                else {
                    document.getElementById('abawdWorking').style.display = "none";
                }
            }
        }
    
        memNum = 2;
        function newHHMember () {
            var fab = document.getElementById("fa").checked;
            var mab = document.getElementById("meds").checked;
            var table = document.getElementById("hhCompTableBod"); // find table to append to
            var cell1 = document.createElement("tr");
            cell1.id = "hhMem" + memNum;
            table.appendChild(cell1);
            var tbd1 = document.createElement("td");
            tbd1.align="center";
            cell1.appendChild(tbd1);
            var t1 = document.createElement("input");
            t1.type="text";
            t1.id="name" + memNum;
            tbd1.appendChild(t1);
            var tbd2 = document.createElement("td");
            tbd2.align="center";             
            cell1.appendChild(tbd2);
            var t2 = document.createElement("input");
            t2.type="number";
            t2.id="age" + memNum;
            tbd2.appendChild(t2);
            var tbd3 = document.createElement("td");
            tbd3.align="center";             
            cell1.appendChild(tbd3);
            var t3 = document.createElement("input");
            t3.type="checkbox";
            t3.id="apply" + memNum;
            tbd3.appendChild(t3);
            var tbd4 = document.createElement("td");
            tbd4.align="center";
            tbd4.className = "PPCheck";
            cell1.appendChild(tbd4);
            if (fab == true) {
                tbd4.style.display="block";
            }
            var t4 = document.createElement("input");
            t4.type="checkbox";
            t4.id="pandp" + memNum;
            tbd4.appendChild(t4);
            var tbd5 = document.createElement("td");
            tbd5.align="center";             
            cell1.appendChild(tbd5);
            var t5 = document.createElement("input");
            t5.type="checkbox";
            t5.id="disq" + memNum;
            t5.onclick = function() {showMe('sanction1', this);};
            tbd5.appendChild(t5);
            var tbd6 = document.createElement("td");
            tbd6.align="center";
            tbd6.className = "disabledCheck";
            cell1.appendChild(tbd6);
            if (mab == true) {
                tbd6.style.display="block";
            }
            var t6 = document.createElement("input");
            t6.type="checkbox";
            t6.id="disab" + memNum;
            tbd6.appendChild(t6);
            var tbd7 = document.createElement("td");
            tbd7.align="center";
            cell1.appendChild(tbd7);
            var t7 = document.createElement("input");
            t7.type ="button";
            t7.id = "add" + memNum;
            t7.value = "Add";
            t7.onclick = function() {newHHMember();};
            tbd7.appendChild(t7);
        memNum ++;
    }