
var EmployeeArray = [
    {name:'ahmed',salary:'4000',tax:"160"},
    {name:'ali',salary:'3000', tax:'120'},
]

function calculationTax(){
    

}
DisplayEmployee(EmployeeArray)


function AddEmployee(){
    let name = document.getElementById("Name").value
    let salary = document.getElementById("Salary").value
    let tax = document.getElementById("tax")
    tax = salary*(4/100)
    EmployeeArray.push({ name: name, salary: salary, tax:tax })
    
    DisplayEmployee(EmployeeArray)
    console.log(EmployeeArray, )
}

function DisplayEmployee(gerrard) {
    document.getElementById("tabelrow").innerText =''
    let list = document.getElementById("tabelrow");
    let count =0
    gerrard.map((item) => {
      
        let li = document.createElement("tr");
        li.innerHTML = `
          <td>  ${count + 1}  </td>
        <td>  ${item.name}  </td>
        <td>  ${item.salary}</td>
          <td>  <button type="button" onclick="Edit(${count})" 
                class="btn btn-primary btn-block" >Edit</button>  </td>
            <td>  <button type="button" onclick="Delete(${count})"
                class="btn btn-danger btn-block" >Delete</button>  </td>
            <td> ${item.tax}   </td>
        `;
        list.appendChild(li);
        count = count + 1
    })
}

function SortMin(){

    minSortedArray = EmployeeArray.sort((a,b) => (a.salary > b.salary) ? 1 : ((b.salary > a.salary) ? -1 : 0))
   

    console.log(minSortedArray);
    DisplayEmployee(minSortedArray)

}
function SortMax(){
    maxSortedArray = EmployeeArray.sort((a,b) => (a.salary < b.salary) ? 1 : ((b.salary < a.salary) ? -1 : 0))
   
    console.log(maxSortedArray);
    DisplayEmployee(maxSortedArray)

}



function Delete(x){
console.log("x",x)
    EmployeeArray.splice(x, 1);
    console.log(EmployeeArray)
    DisplayEmployee()
}

function Edit(x) {
    console.log("x", x)
    let name = document.getElementById("Name").value
    let salary = document.getElementById("Salary").value
    EmployeeArray[x].name = name;
    EmployeeArray[x].salary = salary;
    DisplayEmployee()
}