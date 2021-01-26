class Sirket{
    emp = [
        ["Nihat Novruzov" , "Ilkin Novruzov" , "Elgiz Ismayilov" , "Elgun Ismayilov" , "Aynure Abisova" , "Mehin Elesgerova" ,"Fidan Hesenova", "Fatime Elesgerova"],
        ["Full Stack Developer" , "Exspiditel", "Economist", "Mathematician" , "Geologist" , "Designer" , "Painter" ,"Dentist"],
        ["21","23","22","18","19","14","15","20"],
        ["2000","1300","3000","800","1200","1800","1000","2500"]

    ]
    constructor(ad,voen){
        this.name = ad;
        this.vergi = voen;
    }

    emptl(){
        let tab = `
        <table class="table table-hover table-striped table-dark "> 
        <tr>
                <th>Name(Surname)</th>
                <th>Job</th>
                <th>Age</th>
                <th>Salary</th>
         </tr>       
        `;
        let isch = this.emp;
        for (let i = 0 ; i<isch[0].length;i++){
            tab+=`
            <tr>
            <td>${isch[0][i]}</td>
            <td>${isch[1][i]}</td>
            <td>${isch[2][i]}</td>
            <td>${isch[3][i]}$</td>
     </tr> 
            `
        }
        tab+= `</table>`;
        return tab;
    }
}
    let yuptech = new Sirket("Yup Company" , "324143425","234");

document.getElementById("cs").innerHTML = `Sirketin adi >> ${yuptech.name} >> Vergisi ${yuptech.vergi}`;
document.getElementsByTagName("main")[0].innerHTML  = yuptech.emptl();