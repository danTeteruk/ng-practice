
angular.module('myApp')
    .factory('Tasks', function() {
			var todoList = this;
        var arr = [{
					id : 0,
          title: 'Item 1',
          description: 'Item description #1'
        },
        {
					id: 1,
          title: 'Item 2',
          description: 'Item description #2'
        }];
        return {
            addItem : function(obj) {
						if (obj.title.length < 3) return alert("min title length 3");
							 obj.id = arr.length;
							 arr.unshift(obj);
							 console.log(obj);


          },
            array : function() {
                return arr;

            },

						deleteItem : function(obj) {
							console.log(obj);
              arr.splice(obj.id, 1)
              arr.forEach( function(item, i) {
                item.id = i;
              });
						}


        }
    });
