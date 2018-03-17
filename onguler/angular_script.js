angular.module('game', [])
    .controller('GalleryController', ['$scope', function($scope) {
        $scope.images = [{ isActive: false, url: '2.jpg' },
            { isActive: false, url: '3.jpg' },
            { isActive: false, url: '4.jpg' },
            { isActive: false, url: '1.jpg' }
        ];
        $scope.addPicture = function() {
            if ($scope.newPicture != "") {
                var obj = {
                    url: $scope.newPicture,
                    isActive: false
                }
                $scope.images.push(obj);
            } else {
                alert("Пустая строка!");
            }
        }
        $scope.editPicture = function(index) {
            if ($scope.images[index].editPicture != "") {
                var _confirm = confirm("Вы уверены, что хотите изменить?")
                if (_confirm) {
                    $scope.images[index].url = $scope.images[index].editPicture;
                }
            } else {
                alert("Пустая строка!");
            }
        }
        $scope.deletePicture = function(item) {
            var _confirm = confirm("Вы уверены, что хотите удалить?")
            if (_confirm) {
                var index = $scope.images.indexOf(item);
                $scope.images.splice(index, 1);
            }
        }
        $scope.showInfo = function(item) {
            var index = $scope.images.indexOf(item);
            $scope.images[index].editPicture = $scope.images[index].url;
            $scope.images[index].isActive = !$scope.images[index].isActive;
            $scope.images[index].editName = getFileNameByURL($scope.images[index].url);
        }
        $scope.toRight = function(index) {
            var url = $scope.images[index].url;
            var show = $scope.images[index].isActive;
            $scope.images[index].url = $scope.images[index + 1].url;
            $scope.images[index].isActive = $scope.images[index + 1].isActive;
            $scope.images[index + 1].url = url;
            $scope.images[index + 1].isActive = show;
            $scope.images[index].editPicture = $scope.images[index].url;
            $scope.images[index].editName = getFileNameByURL($scope.images[index].url);
            $scope.images[index + 1].editPicture = url;
            $scope.images[index + 1].editName = getFileNameByURL(url);
        }
        $scope.toLeft = function(index) {
            var url = $scope.images[index].url;
            var show = $scope.images[index].isActive;
            $scope.images[index].url = $scope.images[index - 1].url;
            $scope.images[index].isActive = $scope.images[index - 1].isActive;
            $scope.images[index - 1].url = url;
            $scope.images[index - 1].isActive = show;
            $scope.images[index].editPicture = $scope.images[index].url;
            $scope.images[index].editName = getFileNameByURL($scope.images[index].url);
            $scope.images[index - 1].editPicture = url;
            $scope.images[index - 1].editName = getFileNameByURL(url);
        }

        function getFileNameByURL(url) {
            var title = url.substring(url.lastIndexOf("/") + 1, url.length);
            title = title.slice('\.')[0];
            return title;
        }
    }]);;