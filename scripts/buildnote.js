function getCLRCText() {
    var clrcDta = document.getElementById("clrcInfo");
    var wrkrId = document.getElementById("workerId").value;
    var accNum = document.getElementById("accessNum").value;
    var doa = document.getElementById("dateApp").value;
    var fab = document.getElementById("fa").checked;
    var cab = document.getElementById("tca").checked;
    var mab = document.getElementById("meds").checked;
    var caType1 = document.getElementById("regtca").checked;
    var caType2 = document.getElementById("caretakerTCA").checked;
    var caType3 = document.getElementById("rap").checked;
    var intvdYes = document.getElementById("intvdYes").checked;
    var intvdNo = document.getElementById("intvdNo").checked;
    var nameData = document.getElementById("interviewName").value;
    var intvDate = document.getElementById("dateIntv").value;
    var ncpApp = document.getElementById("ncpYes").checked;
    var ncpAns = document.getElementById("ncpNo").checked;
    var table = document.getElementById("hhCompTable");
    var rows = table.getElementsByTagName("tr");
    var hhNameArray = [];
    var dddMem = "";
    if (cab == true && caType1 == true) {
        cabt1 = " Temporary Cash Assistance, ";
    } else {
        cabt1 = ""
    }
    if (cab == true && caType2 == true) {
        cabt2 = " Caretaker Cash Assistance, ";
    } else {
        cabt2 = ""
    }
    if (cab == true && caType3 == true) {
        cabt3 = " RAP Cash Assistance, ";
    } 
    else {
        cabt3 = ""
    }
    var bfitsArray = [];
    var bfits = document.querySelector('input[name="benefit"]:checked');
    if (bfits != null) {
        bfits = document.getElementsByName('benefit');
        for(i=0; i<bfits.length; i++){
            if(bfits[i].type=='checkbox' && bfits[i].checked==true)
            bfitsArray.push(" " + bfits[i].value);
        }
        bfits = "Benefits applied for:" + bfitsArray + cabt1 + cabt2 + cabt3 + "\n";
    }else bfits = "";
    var hhRelate = document.getElementById('idVerif').value;
    
    for (i = 0; i < rows.length-1; i++) {
        if (document.getElementById('name' + (i + 1)).value != "") {
            hhNameArray.push(" " + document.getElementById('name' + (i + 1)).value);
        }
        if (hhNameArray.length > 0) {
            var hhMembs = "HH Members: " + hhNameArray + ". ";
        }else hhMembs = "";
    };
    var hhAgeArray = [];
    for (o = 0; o <  rows.length-1; o++) {
        if (document.getElementById('name' + (o + 1)).value != "") {
            hhAgeArray.push(document.getElementById('age' + (o + 1)).value);
        }

    };
    var childMember = hhAgeArray.some(function(e) {
        return e < 18;
    });
    var hhPPArray = [];
    for (a = 0; a < rows.length-1; a++) {
        if (document.getElementById('name' + (a + 1)).value != "") {
            hhPPArray.push(document.getElementById('pandp' + (a + 1)).checked);
        }
    };
    var ppMember = hhPPArray.every(function(e) {
        return e != false;
    });
    var hhPPNoArray = [];
    if (hhPPArray.length <= 1) {
        ppMember = ""
    } else if (fab == true) {
        if (ppMember == true) {
            ppMember = " All HH members P&P together. ";
        } else {
            for (i = 0; i < hhPPArray.length; i++) {
                if (hhPPArray[i] == false) {
                    hhPPNoArray.push(hhNameArray[i]);
                    ppMember = (" " + hhPPNoArray + " P&P Separately. ");
                }
            }
        }
    } else {
        ppMember = ""
    };
    var hhAppArray = [];
    for (p = 0; p < rows.length-1; p++) {
        if (document.getElementById('name' + (p + 1)).value != "") {
            hhAppArray.push(document.getElementById('apply' + (p + 1)).checked);
        }
    }
    var appMember = hhAppArray.every(function(e) {
        return e != false;
    });
    var hhAppNoArray = [];
    if (hhAppArray.length == 0) {
        appMember = "";
    } else if (appMember == true) {
        appMember = " All Members applying for benefits. ";
    } else {
        for (i = 0; i < hhAppArray.length; i++) {
            if (hhAppArray[i] == false) {
                hhAppNoArray.push(hhNameArray[i]);
                appMember = (" " + hhAppNoArray + " not applying. ");
            }
        }
    };
    var hhDisqArray = [];
    for (s = 0; s < rows.length-1; s++) {
        if (document.getElementById('name' + (s + 1)).value != "") {
            hhDisqArray.push(document.getElementById('disq' + (s + 1)).checked);
        }
    }
    var disqYesMemberArray = [];
    var disqMember = hhDisqArray.some(function(e) {
        return e == true;
    });
    if (disqMember == true) {
        for (i = 0; i < hhDisqArray.length; i++) {
            if (hhDisqArray[i] == true) {
                disqYesMemberArray.push(hhNameArray[i]);
                disqMember = (" Disq/Sanx Members: " + disqYesMemberArray + ": " + document.getElementById('sanction').value);
            }
        }
    } else {
        disqMember = ""
    }
    var citAns = document.querySelector('input[name=citizen]:checked');
    if (citAns != null) {
        citAnsDt = citAns.value;
        if (citAnsDt == "Yes") {
            citAns = "All HH Members are US Citizens. "
        };
        if (citAnsDt == "No") {
            citAns = "Non-citizen details: " + document.getElementById("nonCitizen").value;
        }
    } else {
        citAns = ""
    };
    var assetAns = document.getElementById("assetDisc").value;
    var earnAns = document.getElementById("earnedIncomeDisc").value;
    clrcDta.style.display = "block";
    if (wrkrId != "") {
        wrkrId = wrkrId + "\n"
    } else {
        wrkrId = ""
    }
    if (accNum != "") {
        accNum = "Access#: " + accNum + "\n"
    }
    if (doa != "") {
        doa = moment(doa).format('L');
        doa = ("DOA: " + doa + " \n");
    }
    if (fab == true) {
        fab = "Food Assistance, ";
    } else {
        fab = "";
    }
    if (mab == true) {
        mab = "Medical Assistance, ";
    } else {
        mab = "";
    }
    
    var intOut = document.getElementById('intvAttemptOutcome').value;
    var intvDta = "";
    var intAttDis = document.getElementById('intvAttemptDisc').value;
    if (intvdYes == true) {
        if (nameData != "") {
            nameData = ("Interviewed: " + nameData + ". ");
        } else {
            nameData = "";
        };
        if (intvDate != "") {
            intvDate = moment(intvDate).format('L');
            intvDate = ("Interview date: " + intvDate + ". ");
        }
    }else if (intvdNo == true && document.querySelector('input[name="interviewNeeded"]:checked').value == "Yes") {
        intvDta = "Interview attempted: " + intOut + ". ";
    }else if (intvdNo == true && document.querySelector('input[name="interviewNeeded"]:checked').value == "No") {
        intvDta = "Interview not attempted. " + intAttDis + " ";
    }

    var addYesAns = document.getElementById('addYes').checked;
    var addNoAns = document.getElementById('addNo').checked;
    var correctAddInfo = document.getElementById('addAns').value;
    if (addYesAns == true) {
        addYesAns = "Customer reported address correct on application. "
    } else {
        addYesAns = ""
    };
    if (addNoAns == true) {
        addNoAns = "Customer reported correct address as " + correctAddInfo + ". "
    } else {
        addNoAns = ""
    };
    var phoneYesAns = document.getElementById('phoneYes').checked;
    var phoneNoAns = document.getElementById('phoneNo').checked;
    var correctPhoneInfo = document.getElementById('phoneAns').value;
    if (phoneYesAns == true) {
        phoneYesAns = "Customer reported phone number correct on application. "
    } else {
        phoneYesAns = ""
    };
    if (phoneNoAns == true) {
        phoneNoAns = "Customer reported correct phone number as " + correctPhoneInfo + ". "
    } else {
        phoneNoAns = ""
    };
    var rAndRYesAns = document.getElementById('reviewRRYes').checked;
    var rAndRNoAns = document.getElementById('reviewRRNo').checked;
    var rAndRDis = document.getElementById('rrWhyNotDis').value;
    if (rAndRYesAns == true) {
        rAndRText = "Reviewed R&R: Yes. "
    } else if (rAndRNoAns == true) {
        rAndRText = "Reviewed R&R: No. " + rAndRDis + " "
    } 
    else {
        rAndRText = ""
    };
    var curDet = document.getElementById("typeEligDet").value;
    if (curDet != "none") {
        curDet = "Determination type: " + curDet + ". ";
    }else curDet = "";
    var curRev = document.getElementById("typeRevwComp").value;
    if (curRev != "none") {
        curRev = "Current Review: " + curRev + ". ";
    }else curRev = "";
    var nextRev = document.getElementById("nextRvw").value;
    if (nextRev != "none") {
        nextRev = "Next Review: " + nextRev + ". ";
    }else nextRev = "";
    var ca = document.getElementById("authent").value;
    if (ca == "Automatic") {
        ca = "CA: " + ca + ". ";
    }else if (ca == "Manual" || ca == "No") {
        ca = "CA: " + ca + ". " + document.getElementById("authenDisc").value + " ";
    } else ca = "";
    if (ncpApp == true) {
        ncpAns = "NCP demographic information correct on application. "
    } else if (ncpAns == true) {
        ncpAns = "NCP details: " + document.getElementById('ncpDetail').value + " ";
    } else {
        ncpAns = ""
    }
    if (assetAns != "") {
        assetAns = "Assets: " + assetAns + " "
    }
    if (earnAns != "") {
        earnAns = "Earned Income: " + earnAns + " "
    }
    var unEarnAns = document.getElementById('unearnedIncomeDisc').value;
    if (unEarnAns != "") {
        unEarnAns = "Unearned Income: " + unEarnAns + " "
    }
    var hhExpenAns = document.getElementById('expensesDisc').value;
    if (hhExpenAns != "") {
        hhExpenAns = "HH Expenses: " + hhExpenAns + " "
    }
    var mgmtAns = document.getElementById('managementDisc').value;
    if (mgmtAns != "") {
        mgmtAns = "Management: " + mgmtAns + " "
    }
    var drugTrfc = document.querySelector('input[name="trafficking"]:checked');
    if (drugTrfc != null) {
        drugTrfc = document.querySelector('input[name="trafficking"]:checked').value;
        drugTrfc = "Drug Trafficker: " + drugTrfc + ". " + document.getElementById("trafficDesc").value + " ";
    }else drugTrfc = "";
    var fleeFel = document.querySelector('input[name="fleeFelon"]:checked');
    if (fleeFel != null) {
        fleeFel = document.querySelector('input[name="fleeFelon"]:checked').value;
        fleeFel = "Fleeing Felon: " + fleeFel + ". " + document.getElementById("fleeFelonDesc").value + " ";
    }else fleeFel = "";
    var colStu = document.querySelector('input[name="college"]:checked');
    if (colStu != null) {
        colStu = "College Student: " + colStu.value + ". " + document.getElementById("collegeDesc").value + " ";
    }else colStu = "";
    var hmeLs = document.querySelector('input[name="homelessFA"]:checked');
    if (hmeLs != null) {
        if (hmeLs.value == "Yes") {
            hmeLs = "HH Reported homelessness: " + hmeLs.value + ". " + document.getElementById("homelessFADisc").value + " ";
        }else hmeLs = "";
    }else hmeLs = "";
    var abawdStmt = document.querySelector('input[name="ABAWDStatement"]:checked');
    if (abawdStmt != null) {
        abawdStmt = "ABAWD work requirements and exclusions explained: " + abawdStmt.value + ". " + document.getElementById("ABAWDStatExplTxt").value + " ";
    }else abawdStmt = "";
    var abdA = document.getElementById("abawdDivA0");
    var abdAChildren = abdA.getElementsByTagName('label').length
    var abdAArray = [];
    for (s = 0; s < abdAChildren; s++) {
        if (document.getElementById('abawdAName' + (s)).checked == true) {
            abdAArray.push(document.getElementById('abawdALabel' + (s)).innerText);
        }
    }
    if (abdAArray.length > 0) {
        var abdAAns = "Receiving SSI or SSDI: " + abdAArray + ". ";
    }else abdAAns = "";
    var abdB = document.getElementById("abawdDivB0");
    var abdBChildren = abdB.getElementsByTagName('label').length
    var abdBArray = [];
    for (s = 0; s < abdBChildren; s++) {
        if (document.getElementById('abawdBName' + (s)).checked == true) {
            abdBArray.push(document.getElementById('abawdBLabel' + (s)).innerText);
        }
    }
    if (abdBArray.length > 0) {
        var abdBAns = "Caring for an incapacitated person: " + abdBArray + ". " + document.getElementById('whoCareForAns').value + " ";
    }else abdBAns = "";
    var abdC = document.getElementById("abawdDivC0");
    var abdCChildren = abdC.getElementsByTagName('label').length
    var abdCArray = [];
    for (s = 0; s < abdCChildren; s++) {
        if (document.getElementById('abawdCName' + (s)).checked == true) {
            abdCArray.push(document.getElementById('abawdCLabel' + (s)).innerText);
        }
    }
    if (abdCArray.length > 0) {
        var abdCAns = "Receiving or Applied for UCB: " + abdCArray + ". ";
    }else abdCAns = "";
    var abdD = document.getElementById("abawdDivD0");
    var abdDChildren = abdD.getElementsByTagName('label').length
    var abdDArray = [];
    for (s = 0; s < abdDChildren; s++) {
        if (document.getElementById('abawdDName' + (s)).checked == true) {
            abdDArray.push(document.getElementById('abawdDLabel' + (s)).innerText);
        }
    }
    if (abdDArray.length > 0) {
        var abdDAns = "Drug/Alcohol treatment: " + abdDArray + ". " + document.getElementById('whereTreatedAns').value + " ";
    }else abdDAns = "";
    var abdE = document.getElementById("abawdDivE0");
    var abdEChildren = abdE.getElementsByTagName('label').length
    var abdEArray = [];
    for (s = 0; s < abdEChildren; s++) {
        if (document.getElementById('abawdEName' + (s)).checked == true) {
            abdEArray.push(document.getElementById('abawdELabel' + (s)).innerText);
        }
    }
    if (abdEArray.length > 0) {
        var abdEAns = "Employed 30 hrs/wk: " + abdEArray + ". " + document.getElementById('30HourDisc').value + " ";
    }else abdEAns = "";
    var abdF = document.getElementById("abawdDivF0");
    var abdFChildren = abdF.getElementsByTagName('label').length
    var abdFArray = [];
    for (s = 0; s < abdFChildren; s++) {
        if (document.getElementById('abawdFName' + (s)).checked == true) {
            abdFArray.push(document.getElementById('abawdFLabel' + (s)).innerText);
        }
    }
    if (abdFArray.length > 0) {
        var abdFAns = "Student: " + abdFArray + ". ";
    }else abdFAns = "";
    var abdG = document.getElementById("abawdDivG0");
    var abdGChildren = abdG.getElementsByTagName('label').length
    var abdGArray = [];
    for (s = 0; s < abdGChildren; s++) {
        if (document.getElementById('abawdGName' + (s)).checked == true) {
            abdGArray.push(document.getElementById('abawdGLabel' + (s)).innerText);
        }
    }
    if (abdGArray.length > 0) {
        var abdGAns = "Physically/Mentally unfit: " + abdGArray + ". " + document.getElementById('unfitDurDate').value + " ";
    }else abdGAns = "";
    var abdH = document.getElementById("abawdDivH0");
    var abdHChildren = abdH.getElementsByTagName('label').length
    var abdHArray = [];
    for (s = 0; s < abdHChildren; s++) {
        if (document.getElementById('abawdHName' + (s)).checked == true) {
            abdHArray.push(document.getElementById('abawdHLabel' + (s)).innerText);
        }
    }
    if (abdHArray.length > 0) {
        var abdHAns = "Pregnant: " + abdHArray + ". ";
    }else abdHAns = "";
    var abdI = document.getElementById("abawdDivI0");
    var abdIChildren = abdI.getElementsByTagName('label').length
    var abdIArray = [];
    for (s = 0; s < abdIChildren; s++) {
        if (document.getElementById('abawdIName' + (s)).checked == true) {
            abdIArray.push(document.getElementById('abawdILabel' + (s)).innerText);
        }
    }
    if (abdIArray.length > 0) {
        var abdIAns = "Working 20 hrs/wk: " + abdIArray + ". " + document.getElementById('20HourDisc').value + " " ;
    }else abdIAns = "";
    var tmeLmts = document.querySelector('input[name="abawdTimeLimit"]:checked');
    if (tmeLmts != null) {
        tmeLmts = document.querySelector('input[name="abawdTimeLimit"]:checked').value;
        if (tmeLmts == "Yes") {
            tmeLmts = "Exhausted Time Limits. ";
        }else if (tmeLmts == "No") {
            tmeLmts = "Time Limited Months not used. ";
        }else tmeLmts = "";
    }else tmeLmts = "";
    
    var regainElg = document.querySelector('input[name="abawdRegain"]:checked');
    if (regainElg != null) {
        regainElg = document.querySelector('input[name="abawdRegain"]:checked').value;
        if (regainElg == "Yes") {
            regainElg = "Regaining eligibility explained: Yes. ";
        }else if (regainElg == "No") {
            regainElg = "Regaining eligibility explained: No. ";
        }else regainElg = "";
    }else regainElg = "";
    
    var retro = document.querySelector('input[name="retroMedicaid"]:checked');
    if (retro != null) {
        retro = "Retro Medicaid requested: " + retro + ". ";
    }else retro = "";
    var allDDD = document.getElementById('dddScreening').getElementsByClassName('dddList');
    var dddLength = (allDDD.length/3);
    var dddAArray = [];
    var dddBArray = [];
    var dddCArray = [];
    var dddA = "";
    var dddB = "";
    var dddC = "";
    if (childMember == false) {
        for (i = 0; i < dddLength; i++) {
            var dddA = document.getElementById('dddScreenA' + i).checked
            if (dddA == true) {
                dddAArray.push(document.getElementById('dddQuestA' + (i)).innerText);
            }else dddA = "";
            if (dddAArray.length > 0) {
                dddA = "Receiving SSI/SSDI: " + dddAArray + ". "
            }else dddA = "";
        }
        for (i = 0; i < dddLength; i++) {
            var dddB = document.getElementById('dddScreenB' + i).checked
            if (dddB == true) {
                dddBArray.push(document.getElementById('dddQuestB' + (i)).innerText);
            }else dddB = "";
            if (dddBArray.length > 0) {
            dddB = "Application pending for SSI/SSDI: " + dddBArray + ". " 
            }else dddB = "";
        }
        for (i = 0; i < dddLength; i++) {
            var dddC = document.getElementById('dddScreenC' + i).checked
            if (dddC == true) {
                dddCArray.push(document.getElementById('dddQuestC' + (i)).innerText);
            }else dddC = "";
            if (dddCArray.length > 0) {
            dddC = "Pending SSI/SSDI appeal: " + dddCArray + ". "
            }else dddC = ""; 
        }
        if (potenDDD.length == 1) {
            dddMem = potenDDD + " appears to be potential DDD.";
            }
        if (potenDDD.length > 1) {
            dddMem = potenDDD + " appear to be potential DDD.";
            }
    
    }else dddMem ="";
    var preg = document.querySelector('input[name="pregnant"]:checked');
    if (preg != null) {
        preg = document.querySelector('input[name="pregnant"]:checked').value;
        if (preg == "Yes") {
            cvgCre = document.querySelector('input[name="covgCreate"]:checked').value;
            preg = "Pregnant: Yes. " + document.getElementById('pregnantDetail').value + " Number of unborns: " + document.getElementById('pregCount').value + ". " + "Unborn coverage created: " + cvgCre + ". ";
        }else preg = "";
    }else preg = "";
    var taxFile = document.querySelector('input[name="filingTaxes"]:checked');
    if (taxFile != null) {
        taxFile = document.querySelector('input[name="filingTaxes"]:checked').value;
        if (taxFile == "No") {
            taxFile = "Filing Taxes: " + taxFile + ". ";
        }
        if (taxFile == "Yes") {
            deduct = document.querySelector('input[name="deductApp"]:checked').value;
            fileStat = document.getElementById('taxStatus').value;
            deductDisc = document.getElementById('taxDeductions').value + " ";

            taxFile = "Filing Taxes: " + taxFile + ". " + "Filing Status: " + fileStat + ". " + "Reported deductions: " + deduct + ". " + deductDisc;
        }
    }else taxFile = "";
    var claimAll = document.querySelector('input[name="dependentsTaxes"]:checked');
    if (claimAll != null) {
        claimAll = claimAll = document.querySelector('input[name="dependentsTaxes"]:checked').value;
        if (claimAll == "Yes") {
            claimAll = "Filer claiming all HH members as tax dependent: " + claimAll + ". ";
        }
        if (claimAll == "No") {
            outsideClaim = document.querySelector('input[name="dependentClaim"]:checked').value;
            claimWho = document.getElementById('dependentClaimDesc').value + " ";
            claimAll = "Filer claiming all HH members as tax dependent: " + claimAll + ". " + "Anyone else claim HH member: " + outsideClaim + ". " + claimWho;
        }
    }else claimAll = "";
    var oothClaimed = document.querySelector('input[name="oothClaim"]:checked');
    if (oothClaimed != null) {
        oothClaimed = document.querySelector('input[name="oothClaim"]:checked').value;
        if (oothClaimed == "No") {
            oothClaimed = "Filer claiming outside tax dependent: " + oothClaimed + ". ";
        }
        if (oothClaimed == "Yes") {
            oothIncomeClm = document.querySelector('input[name="oothIncome"]:checked');
            if (oothIncomeClm != null) {
                oothIncomeClm = document.querySelector('input[name="oothIncome"]:checked').value;
                oothIncDisc = document.getElementById('oothIncomeDesc').value;
                oothClaimed = "Filer claiming outside tax dependent: " + oothClaimed + ". " + "OOTH income reported: " + oothIncomeClm + ". " + oothIncDisc + " "; 
            }
        }else oothClaimed = "Filer claiming outside tax dependent: " + oothClaimed + ". ";
    }else oothClaimed = "";
    var agedOut = document.querySelector('input[name="agedFC"]:checked');
    if (agedOut != null) {
        agedOut = document.querySelector('input[name="agedFC"]:checked').value;
        var whoAged = document.getElementById('agedFCNames').value;
        if (agedOut == "Yes") {
            agedOut = "Aged out of Foster Care: " + agedOut + ". " + whoAged + " ";
        }else agedOut = "";
    }else agedOut = "";
    var thrdptyArray = [];
    var thrdpty = document.getElementById('tplYes').checked;
    if (thrdpty == true) {
        thrdpty = document.getElementsByName('tplTypes');
        for(i=0; i<thrdpty.length; i++){
            if(thrdpty[i].type=='checkbox' && thrdpty[i].checked==true)
            thrdptyArray.push(" " + thrdpty[i].value);
        }
        thrdpty = "3rd party liability: Yes." + thrdptyArray + ". " + document.getElementById('3rdPtyDisDisc').value + " ";
    }else thrdpty = "";
    var intendWorkReg = document.querySelector('input[name="workReg"]:checked');
    if (intendWorkReg != null) {
        intendWorkReg = "Intends to Work Reg: " + intendWorkReg.value + ". ";
    }else intendWorkReg = "";
    var schlAtt = document.querySelector('input[name="attendSchool"]:checked');
    if (schlAtt != null) {
        schlAtt = "Children attending school: " + schlAtt.value + ". " + document.getElementById('childSchoolName').value + " ";
    }else schlAtt = "";
    var schlConf = document.querySelector('input[name="conference"]:checked');
    if (schlConf != null) {
        schlConf = "School Conf: " + schlConf.value + ". ";
    }else schlConf = "";
    var curImm = document.querySelector('input[name="immunize"]:checked');
    if (curImm != null) {
        curImm = "Current with immunizations: " + curImm.value + ". " + document.getElementById('immunChildDesc').value + " ";
    }else curImm = "";
    var teenPrnt = document.querySelector('input[name="teenParent"]:checked');
    if (teenPrnt != null) {
        if (teenPrnt == "No") {
            teenPrnt = "";
        }else teenPrnt = "Teen Parent: " + teenPrnt.value + ". " + document.getElementById('teenParentSchoolDisc').value + " ";
    }else teenPrnt = "";
    var needCare = document.querySelector('input[name="needForCare"]:checked');
    if (needCare != null) {
        if (needCare == "Yes") {
            needCare = "Need for care: " + needCare.value + ". " + document.getElementById('disabledMemDesc').value + " ";
        }else needCare = "";
    }else needCare = "";
    var degRel = document.querySelector('input[name="degRelate"]:checked');
    if (degRel != null) {
        degRel = "Degree of relation: " + degRel.value + ". " + document.getElementById('caretakerRelation').value + " ";
    }else degRel = "";
    var caretakeShelt = document.querySelector('input[name="tcaShelter"]:checked');
    if (caretakeShelt != null) {
        caretakeShelt = "Child's shelter costs: " + caretakeShelt.value + ". " + document.getElementById('tcaShelterAmountDisc').value + " ";
    }else caretakeShelt = "";
    var careTIncl = document.querySelector('input[name="caretakerIncluded"]:checked');
    if (careTIncl != null) {
        careTIncl = "Include Caretaker in the cash: " + careTIncl.value + ". ";
    }else careTIncl = "";
    var careWorkReg = document.querySelector('input[name="caretakerWorkReg"]:checked');
    if (careWorkReg != null) {
        careWorkReg = "Caretaker intends to Work Reg: " + careWorkReg.value + ". ";
    }else careWorkReg = "";
    var ocwPlace = document.querySelector('input[name="courtPlace"]:checked');
    if (ocwPlace != null) {
        ocwPlace = "Placed by OCW: " + ocwPlace.value + ". ";
    }else ocwPlace = "";
    var rcg = document.querySelector('input[name="relCaregiver"]:checked');
    if (rcg != null) {
        rcg = "Rel Care Explained: " + rcg.value + ". " + document.getElementById('relCaregiveDisc').value + " ";
    }else rcg = "";
    var rapShelt = document.querySelector('input[name="rapShelter"]:checked');
    if (rapShelt != null) {
        rapShelt = "Obligated to pay rent: " + rapShelt.value + ". " + document.getElementById('rapShelterAmountDisc').value + " ";
    }else rapShelt = "";
    var rapHmeless = document.querySelector('input[name="rapHomeless"]:checked');
    if (rapHmeless != null) {
        rapHmeless = "Homelessness: " + rapHmeless.value + ". ";
    }else rapHmeless = "";
    var rapMarry = document.querySelector('input[name="rapMarried"]:checked');
    if (rapMarry != null) {
        rapMarry = "RAP Applicant married: " + rapMarry.value + ". " + document.getElementById('rapSpouseName').value + " ";
    }else rapMarry = "";
    var addComm = document.getElementById('addComment').value;
    if (addComm != "") {
        addComm = "Additional Comments: " + addComm + " ";
    }
    var custPend = document.querySelector('input[name="pend"]:checked');
    if (custPend != null) {
        if (custPend.value == "Yes") {
            var pendDte = document.getElementById('datePend').value;
            pendDte = moment(pendDte).format('L');
            custPend = "Pended for: " + document.getElementById('pending').value + " Due: " + pendDte + ". ";
        } else custPend = "";
    }else custPend = "";
    var custFraud = document.querySelector('input[name="fraudRef"]:checked');
    if (custFraud != null) {
        if (custFraud.value == "Yes") {
            custFraud = "Fraud referral: " + custFraud.value + ". " + document.getElementById('fraudRsnDet').value;
        } else custFraud = "";
    }else custFraud = "";
    clrcDta.value = wrkrId + accNum + doa + bfits + nameData + intvDate + intvDta + addYesAns + addNoAns + phoneYesAns + phoneNoAns + rAndRText + ncpAns + hhMembs + hhRelate + ppMember + appMember + disqMember + curDet + curRev + nextRev + ca + citAns + assetAns + earnAns + unEarnAns + hhExpenAns + mgmtAns + drugTrfc + fleeFel + colStu + hmeLs + abawdStmt + abdAAns + abdBAns + abdCAns + abdDAns + abdEAns + abdFAns + abdGAns + abdHAns + abdIAns + abawdMem + tmeLmts + regainElg + dddA + dddB + dddC + dddMem + preg + taxFile + claimAll + oothClaimed + agedOut + thrdpty + intendWorkReg + schlAtt + schlConf + curImm + teenPrnt + needCare + degRel + caretakeShelt + careTIncl + careWorkReg + ocwPlace + rcg + rapShelt + rapHmeless + rapMarry + addComm + custPend + custFraud;
    clrcDta.focus();
}
