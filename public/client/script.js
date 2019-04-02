var app = angular.module('App', []).controller('CrudCtrl', ['$scope', 'crudService',
	function($scope, $crudService) {
	    
	  $scope.AddProfile = {};
	  
	  $scope.showForm = false;
	  
	  $scope.displayForm = function(condition){
	      $scope.showForm = condition;
	      $scope.AddProfile = {};
	  }
	  
	  $scope.loadData = function(){
	    $crudService.getCollection().then(function(response) {	
			$scope.Profiles = response.data.Population;
			console.log($scope.Profiles)
		});
	  }
	    
	 $scope.edit = function(index){
	    $scope.entity = {}
	   $scope.entity = $scope.Profiles[index];
	   $scope.entity.index = index;
	   $scope.entity.editable = true;
	 }
	    
	 $scope.delete = function(index, data){
	   $crudService.deleteEntity(data).success(function(data) {
	        $scope.Profiles.splice(index,1);
	       $scope.success = data.message;
	       $scope.error = false;
		}).error(function(data) {
	        $scope.loadData();
	       $scope.error = data.message;
	       $scope.success = false;
	    });
	 }
	    
	 $scope.save = function(index, id){
	   $scope.Profiles[index].editable = false;
	   $crudService.updateEntity($scope.Profiles[index], id).success(function(data) {
	       $scope.success = data.message;
	       $scope.error = false;
	       $scope.displayForm(false);
		}).error(function(data) {
	       $scope.error = data.message;
	       $scope.success = false;
	    });
	   
	 }
	 
	$scope.loadData();	
	    
	 $scope.post = function(){
	 	var Population = {
	 		edad : $scope.AddProfile.edad,
	 		alamat : $scope.AddProfile.alamat,
	 		mujer : $scope.AddProfile.mujer,
	 		total : $scope.AddProfile.total
	 	};
	   $crudService.postEntity(Population).success(function(data) {
	       $scope.showForm = false;
	       $scope.success = data.message;
	       $scope.error = false;
	       $scope.loadData();
		}).error(function(data) {
	       $scope.error = data.message;
	       $scope.success = false;
	    });
	 }
	}
]);