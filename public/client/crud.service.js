app.service('crudService', ['$http',
	function($http) {
		'use strict';
		var base = 'http://localhost:3000/api/population';
		this.getCollection = function() {
			return $http({
				method: 'GET',
				url: base + "/all"
			})
				.success(function(data) {
					return data;
				})
				.error(function(data) {
					return data;
				});
		};

		this.getEntity = function(id) {
			return $http({
				method: 'GET',
				url: base +'/'+ id
			})
				.success(function(data) {
					return data;
				})
				.error(function(data) {
					return data;
				});
		};

		this.postEntity = function(param) {

			return $http({
				method: 'POST',
				url: base,
				data: param,
				headers: {
					'Content-Type': 'application/json',
					'Authorization' : 'ee0fc2e57edf3773f34493a7547209e5'
				}
			})
				.success(function(data) {
					return data;
				})
				.error(function(data) {
					return data;
				});
		};

		this.updateEntity = function(param,id_Population) {
			return $http({
				method: 'PUT',
				url: base +'/'+id_Population,
				data: param,
				headers: {
					'Content-Type' : 'application/json',
					'Authorization' : 'ee0fc2e57edf3773f34493a7547209e5'
				}
			})
				.success(function(data) {
					return data;
				})
				.error(function(data) {
					return data;
				});
		};

		this.deleteEntity = function(param){
			return $http({
				method:'DELETE',
				url: base +'/'+param.id_Population,
				data:param,
				headers: {
					'Content-Type' : 'application/json'
					
				}
			})
			.success(function(data){
				return data;
			})
			.error(function(data){
				return data;
			});
		};

		return this;
	}
]);