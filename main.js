angular.module("todolist", []);

angular.module("todolist").controller("todolistCtrl", function ($scope) {

    let idCont = 0;    

    $scope.tasks = [
    ];

    $scope.adicionarContato = function (task) {

        task.id = idCont++;
        task.status = false;
        $scope.tasks.push(task);
        document.querySelector("label[for='newtodo']").classList.remove("active");
        delete $scope.task;        
    };
    
    
    $scope.delete = (task) => {let index = $scope.tasks.indexOf(task); $scope.tasks.splice(index, 1); }

    var logoEl = document.getElementById('logo');
    
    setTimeout(function () {
        
    logoEl.setAttribute('class', 'trace');
        
    }, 50);


});

