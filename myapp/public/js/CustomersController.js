var app = angular.module('myApp', ['ngRoute']);
app.controller('CustomersController', function($scope,$interval, $http) {

	$scope.formData = {};

 	$scope.formCreate = {};

	$scope.createCustomer = function() {
		
	  $http({
	  method  : 'POST',
	  url     : '../api/customer',
	  data    : JSON.stringify($scope.formCreate),  // pass in data as strings
	  headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
	 })
	  .success(function(data) {
	    console.log(data);

	    if (!data.success) {
	      // if not successful, bind errors to error variables
	      $scope.message = data.message;
	      $scope.message = data.message;
	    } 
	    else {
	      // if successful, bind success message to message
	      $scope.message = data.message;
	    }
	  });
	};

	$scope.getAllCustomers = function(){
		$http.get('/api/customer')
		.then(function successCallback(response) {
			$scope.names = response.data;
		},
		function errorCallback(response) {
			alert('faail ' + response);
		});
	}
 
 	 

	$scope.deleteCustomer = function(id){
		  $http({
		  method  : 'DELETE',
		  url     : '../api/customer/'+id,
		    
		  headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
		 })
		  .success(function(data) {
		    console.log(data);

		    if (!data.success) {
		      // if not successful, bind errors to error variables
		      $scope.message = data.message;
		      $scope.message = data.message;
		    } else {
		      // if successful, bind success message to message
		      $scope.message = data.message;
		    }
		  });

	}

	$scope.showUpdate = function(customer){
		//alert($scope.formData.nama);
		$scope.formData.nama = customer.Name;
		$scope.formData.place = customer.Place;
		$scope.formData.id = customer.Id;
		$scope.isShow = true;
	}

	$scope.updateCustomer = function(){
		$http({
		  method  : 'PUT',
		  url     : '../api/customer/'+$scope.formData.id,
		  data    : JSON.stringify($scope.formData),  // pass in data as strings
		  headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
		 })
		  .success(function(data) {
		    console.log(data);

		    if (!data.success) {
		      // if not successful, bind errors to error variables
		      $scope.message = data.message;
		      $scope.message = data.message;
		    } else {
		      // if successful, bind success message to message
		      $scope.message = data.message;
		    }
		});
	};
	// $scope.intervalPromise = $interval(function(){
 //          $scope.getAllCustomers();
 //    }, 5000); 

	$scope.getAllCustomers();

});