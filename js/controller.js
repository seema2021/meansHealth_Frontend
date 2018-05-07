var App = angular.module('myApp', ['ngStorage']);

App.api = 'http://medicalratios.net/Menas_health_Api/public/rest-api/v1/';
App.image = 'http://medicalratios.net/Menas_health_Api/public/';

App.controller('authController', function ($scope, $http, $localStorage) {
//    toaster.pop('success', "You Have a new Notification");
    $scope.register = function () {
        window.location.href = 'pageapp-register.html';
    }
    $scope.loginpage = function () {
        window.location.href = 'login.html';
    }
    $scope.forgetpass = function () {
        window.location.href = 'forget.html';
    }
    $scope.register1 = function () {
        window.location.href = 'pageapp-register1.html';
    }
    $scope.register2 = function () {
        window.location.href = 'pageapp-register-2.html';
    }
    $scope.login = function (user) {
        $localStorage.currentuser = {};
        $scope.user = {};
        $scope.user = user;

        if ($scope.user.email && $scope.user.password) {
//            console.log($scope.user)
            $scope.loader = true;
            $http.post(App.api + "login", $scope.user).then(function (response) {
                $scope.user = response.data;
//                console.log($scope.user)
                $localStorage.currentuser = $scope.user;
                $scope.loader = false;
                alert('You Are Successfully Logged In!!', {'type': 'Success:', 'theme': 'green', 'delay': 3000});
                //if($localStorage.reseration.from_address && $localStorage.reseration.to_address){
//                  window.location.href = 'checkout.html';
                //}
                //else{
                $scope.loader = false;
                window.location.href = 'home.html';
                //}
            }, function (data) {
                $scope.loader = false;
                alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});

            });
        } else {
            alert("Please enter email & password!", {'type': 'Error', 'theme': 'red', 'delay': 3000});
        }

    };
    
      $scope.forget = function (user) {
        $localStorage.currentuser = {};
        $scope.user = {};
        $scope.user = user;

        if ($scope.user.email) {
            $scope.loader = true;
            $http.post(App.api + "forget/pass", $scope.user).then(function (response) {
                $scope.user = response.data;
                $scope.loader = false;
                alert(response.data.message, {'type': 'Success:', 'theme': 'green', 'delay': 3000});
                $scope.loader = false;
                window.location.href = 'login.html';
                  }, function (data) {
                $scope.loader = false;
                alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});
            });
        } else {
            alert("Please enter email & password!", {'type': 'Error', 'theme': 'red', 'delay': 3000});
        }

    };


    $scope.regsiter = function (user) {
        $localStorage.currentuser = {};
        $scope.user = {};
        $scope.user = user;
        console.log($scope.user);
        if (($scope.user.password == $scope.user.confirm_password)) {
            $scope.loader = true;
            $http.post(App.api + "registration", $scope.user).then(function (response) {
                $scope.myres = response.data;
                $localStorage.reseration = {};
                $localStorage.currentuser = $scope.myres;
                $scope.loader = false;
                alert('You Are Successfully Register in!', {'type': 'Success:', 'theme': 'green', 'delay': 3000});
                window.location.href = 'home.html';
            }, function (data) {
                $scope.loader = false;
                alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});
                location.reload();
            });
        } else {
            $scope.loader = false;
            alert("Your Password and Confirm Password Dos't Match!", {'type': 'Error', 'theme': 'red', 'delay': 3000});
        }


    };

});

App.controller('faqController', function ($scope, $http, $interval, $localStorage) {
//     $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
//                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.loader = true;
    $http.get(App.api + "faq").then(function (response) {
        $scope.faqs = response.data;
        $scope.loader = false;
    }, function (data) {
        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
    });
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
     $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }
});
App.controller('bookController', function ($scope, $http, $interval, $localStorage) {
//    $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } 
////            else
//////                toaster.pop('success', "You Have a new Notification", response.data.title);
////            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
////                $scope.notification = response.data;
////            });
//        });
//    }, 20000);

//  $(document).ready(function () {
//            $interval(function () {
//                $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//                    $scope.notification = response.data;
//                   console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//                    if (response.data == 1) {
//
//                    } 
////                    else
//////                        toaster.pop('success', "You Have a new Notification", response.data.title);
////                    $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
////                        $scope.notification = response.data;
////                    });
//                });
//            }, 2000);
//        });
  function notificationCall(title){

        function onShowNotification() {
            console.log('notification is shown!');
        }

        function onCloseNotification() {
            console.log('notification is closed!');
        }

        function onClickNotification() {
            console.log('notification was clicked!');
        }

        function onErrorNotification() {
            console.error('Error showing notification. You may need to request permission.');
        }

        function onPermissionGranted() {
            console.log('Permission has been granted by the user');
            doNotification();
        }

        function onPermissionDenied() {
            console.warn('Permission has been denied by the user');
        }

        function doNotification() {
             var myNotification = new Notify('You Have a new Notification', {
            body: title,
                    tag: "New Notification",
                    notifyShow: onShowNotification,
                    notifyClose: onCloseNotification,
                    notifyClick: onClickNotification,
                    notifyError: onErrorNotification,
                    timeout: 12
            });

            myNotification.show();
        }

        if (!Notify.needsPermission) {
            doNotification();
        } else if (Notify.isSupported()) {
            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
        }
        }
    $scope.user = $localStorage.currentuser;
//    $scope.loader = true;
    $scope.question = function () {
        window.location.href = 'question.html?' + 1;
    }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    
      $scope.faq = function () {
        window.location.href = 'faq.html';
    }
    $scope.profile = function () {
        window.location.href = 'profile.html';
    }
    $scope.changePassword = function () {
        window.location.href = 'pageapp-update-password.html';
    }
    $scope.contact = function () {
        window.location.href = 'contact.html';
    }
    $scope.product = function () {
        window.location.href = 'product.html';
    }
     $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }
//    $scope.question = function () {
//        window.location.href = 'medical-answers.html';
//    }
    $scope.appointment = function () {
        window.location.href = 'pageapp-appointment.html';
    }
    $scope.invoice = function () {
        window.location.href = 'store-invoice.html';
    }
    $scope.logout = function () {
        window.localStorage.clear();
        location.href = "login.html";
    };

});
App.controller('homeController', function ($scope, $http, $interval, $localStorage) {
    
    
//    $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.user = $localStorage.currentuser;
    console.log($scope.user);
    $scope.loader = true;
    $http.post(App.api + "your/appoitment", {id: $scope.user.id}).then(function (response) {
        $scope.appoitment = response.data;
        $scope.loader = false;
    }, function (data) {
        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
    });
    $scope.faq = function () {
        window.location.href = 'faq.html';
    }
     $scope.home = function () {
        window.location.href = 'home.html';
    }
    $scope.profile = function () {
        window.location.href = 'profile.html';
    }
    $scope.changePassword = function () {
        window.location.href = 'pageapp-update-password.html';
    }
    $scope.contact = function () {
        window.location.href = 'contact.html';
    }
    $scope.product = function () {
        window.location.href = 'product.html';
    }
    $scope.question = function () {
        window.location.href = 'medical-answers.html';
    }
    $scope.appointment = function () {
        window.location.href = 'pageapp-appointment.html';
    }
    $scope.invoice = function () {
        window.location.href = 'store-invoice.html';
    }
     $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }
    $scope.logout = function () {
        window.localStorage.clear();
        location.href = "login.html";
    };
});

App.controller('answerController', function ($scope, $http, $interval, $localStorage) {
//     $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.user = $localStorage.currentuser;
    $scope.loader = true;
    $http.post(App.api + "user/answer", {id: $scope.user.id}).then(function (response) {
        $scope.answers = response.data;
        $scope.loader = false;
    }, function (data) {
        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
    });
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.appointment = function () {
        window.location.href = 'appoitment_time.html';
    }

});
App.controller('appointmentTimeController', function ($scope, $http, $interval, $localStorage) {
//     $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.user = $localStorage.currentuser;
    $scope.submit = function (app) {
        if ($scope.app) {
            $localStorage.app = $scope.app;
            window.location.href = 'appoitment_day.html';
        } else {
            alert('please select Appointement Date')
        }
    }
    $scope.thanku = function () {
        window.location.href = 'page-status.html';
    }
    $scope.back = function () {
        window.location.href = 'medical-answers.html';
    }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
});

App.controller('appointmentDateController', function ($scope, $http, $interval, $localStorage) {
//   $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.user = $localStorage.currentuser;
    $scope.back = function () {
        window.location.href = 'appoitment_time.html';
    }
//    $scope.submit = function (app) {
//        if ($scope.app) {
//        console.log($scope.app)
//        $localStorage.app = $scope.app;
//        window.location.href = 'appoitment_day.html';
//    }else{
//        alert('please select Appointement Time')
//    }
//}
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.appoitment_date = $localStorage.app
    $scope.submit = function (appoitment) {
        if ($scope.appoitment) {
            $scope.loader = true;
            $scope.appoitment = appoitment;
//            console.log($scope.appoitment.appoitment_day);
            if ($scope.appoitment && $localStorage.app && $scope.user.id) {
                $http.post(App.api + "fix/appoitment", {appoitment_day: $scope.appoitment.appoitment_day, appoitment_date: $localStorage.app.date, user_id: $scope.user.id, user_first_name: $localStorage.currentuser.first_name, user_last_name: $localStorage.currentuser.last_name}).then(function (response) {
                    $scope.myres = response.data;
                    $scope.loader = false;
                    alert('You Appoitment Fix!', {'type': 'Success:', 'theme': 'green', 'delay': 3000});
                    window.location.href = 'thanku.html';
                }, function (data) {
                    alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});

                });
            }
        } else {
            alert('please select Appointement Time')
        }


    };
});

App.controller('qusetionController', function ($scope, $http, $interval, $localStorage) {
//     $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.loader = true;
    $scope.id = window.location.href.split('?')[1];
    $scope.qid = JSON.parse($scope.id) + 1;
    $scope.backid = JSON.parse($scope.id) - 1;

    $http.post(App.api + "particular/question", {id: $scope.id}).then(function (response) {
        $scope.question = response.data;
        $scope.loader = false;
        $scope.items = [];
        $scope.answers = [];
        angular.forEach($scope.question.options, function (value, key) {
            $scope.items.push({selected: false, value: value});
        });
    }, function (data) {
        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
    });

//    console.log($localStorage.currentuser)


    $scope.next = function (myitems) {
        if ($scope.qid == 7) {
            window.location.href = 'page-status.html';
        } else {
            window.location.href = 'question.html?' + $scope.qid;
        }

    }
    $scope.back = function () {
        if ($scope.backid > 1) {
            window.location.href = 'question.html?' + $scope.backid;
        }

    }
     $scope.submit = function () {
//        console.log($scope.items)

        $scope.myanswer = [];
        angular.forEach($scope.items, function (value, key) {
            if (value.selected == true) {
                $scope.myanswer.push(value.value);
            }
        });

        if ($scope.myanswer.length) {
            if ($scope.question.type == 'single') {
                if ($scope.myanswer.length > 1) {
                    alert("You can choose only one answer!");
                } else {
                    $scope.loader = true;
                    $http.post(App.api + "add/answer", {options: $scope.myanswer, user_id: $localStorage.currentuser.id, user_first_name: $localStorage.currentuser.first_name, user_last_name: $localStorage.currentuser.last_name, question_id: $scope.question.id, question: $scope.question.question}).then(function (response) {
                        $scope.res = response.data;
                        $scope.loader = false;
//                        alert("Thank you for submit!");
                        if ($scope.qid == 6) {
                            window.location.href = 'appoitment_time.html';
                        } else {
                            window.location.href = 'question.html?' + $scope.qid;
                        }

                    }, function (data) {
                        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
                    });
                }


            } else {
                $scope.loader = true;
                $http.post(App.api + "add/answer", {options: $scope.myanswer, user_id: $localStorage.currentuser.id, user_first_name: $localStorage.currentuser.first_name, user_last_name: $localStorage.currentuser.last_name, question_id: $scope.question.id, question: $scope.question.question}).then(function (response) {
                    $scope.res = response.data;
//                    alert("Thank you for submit!");
                    $scope.loader = false;
                    if ($scope.qid == 6) {
                        window.location.href = 'appoitment_time.html';
                    } else {
                        window.location.href = 'question.html?' + $scope.qid;
                    }

                }, function (data) {
                    pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
                });
            }
        } else {
            alert("please choose answer");
        }
    };
//    $scope.submit = function () {
////        console.log($scope.items)
//
//        $scope.myanswer = [];
//        angular.forEach($scope.items, function (value, key) {
//            if (value.selected == true) {
//                $scope.myanswer.push(value.value);
//            }
//        });
//
//        if ($scope.myanswer.length) {
//            if ($scope.question.type == 'single') {
//                  $scope.loader = true;
//                    $http.post(App.api + "add/answer", {options: $scope.myanswer, user_id: $localStorage.currentuser.id, user_first_name: $localStorage.currentuser.first_name, user_last_name: $localStorage.currentuser.last_name, question_id: $scope.question.id, question: $scope.question.question}).then(function (response) {
//                        $scope.res = response.data;
//                        $scope.loader = false;
////                        alert("Thank you for submit!");
//                        if ($scope.qid == 6) {
//                            window.location.href = 'appoitment_time.html';
//                        } else {
//                            window.location.href = 'question.html?' + $scope.qid;
//                        }
//
//                    }, function (data) {
//                        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
//                    });
//                
//
//
//            } else {
//                $scope.loader = true;
//                $http.post(App.api + "add/answer", {options: $scope.myanswer, user_id: $localStorage.currentuser.id, user_first_name: $localStorage.currentuser.first_name, user_last_name: $localStorage.currentuser.last_name, question_id: $scope.question.id, question: $scope.question.question}).then(function (response) {
//                    $scope.res = response.data;
////                    alert("Thank you for submit!");
//                    $scope.loader = false;
//                    if ($scope.qid == 6) {
//                        window.location.href = 'medical-answers.html';
//                    } else {
//                        window.location.href = 'question.html?' + $scope.qid;
//                    }
//
//                }, function (data) {
//                    pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
//                });
//            }
//        } else {
//            alert("please choose answer");
//        }
//    };
 $scope.appointment = function () {
        window.location.href = 'appoitment_time.html';
    }

});

App.controller('QusetionEditController', function ($scope, $http, $interval, $localStorage) {
//    $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.loader = true;
    $scope.id = window.location.href.split('?')[1];
    $scope.qid = JSON.parse($scope.id) + 1;
    $scope.backid = JSON.parse($scope.id) - 1;
    
//$scope.next = function (ques) {
//    $http.post(App.api + "particular/question/edit", {id: $scope.id}).then(function (response) {
//        $scope.question = response.data;
//        $scope.loader = false;
//        $scope.items = [];
//        angular.forEach($scope.question.options, function (value, key) {
//            $scope.items.push({selected: false, value: value});
//        });
//    }, function (data) {
//        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
//    });
//    }

//    console.log($localStorage.currentuser)


    $scope.next = function (myitems) {
        if ($scope.qid == 6) {
            window.location.href = 'medical-answers.html';
        } else {
            window.location.href = 'question.html?' + $scope.qid;
        }

    }
    $scope.back = function () {
        if ($scope.backid > 1) {
            window.location.href = 'question.html?' + $scope.backid;
        }

    }
    $scope.submit = function () {
//        console.log($scope.items)

        $scope.myanswer = [];
        angular.forEach($scope.items, function (value, key) {
            if (value.selected == true) {
                $scope.myanswer.push(value.value);
            }
        });

        if ($scope.myanswer.length) {
            if ($scope.question.type == 'single') {
                if ($scope.myanswer.length > 1) {
                    alert("You can choose only one answer!");
                } else {
                    $scope.loader = true;
                    $http.post(App.api + "add/answer", {options: $scope.myanswer, user_id: $localStorage.currentuser.id, user_first_name: $localStorage.currentuser.first_name, user_last_name: $localStorage.currentuser.last_name, question_id: $scope.question.id, question: $scope.question.question}).then(function (response) {
                        $scope.res = response.data;
                        $scope.loader = false;
//                        alert("Thank you for submit!");
                        if ($scope.qid == 6) {
                            window.location.href = 'medical-answers.html';
                        } else {
                            window.location.href = 'question.html?' + $scope.qid;
                        }

                    }, function (data) {
                        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
                    });
                }


            } else {
                $scope.loader = true;
                $http.post(App.api + "add/answer", {options: $scope.myanswer, user_id: $localStorage.currentuser.id, user_first_name: $localStorage.currentuser.first_name, user_last_name: $localStorage.currentuser.last_name, question_id: $scope.question.id, question: $scope.question.question}).then(function (response) {
                    $scope.res = response.data;
//                    alert("Thank you for submit!");
                    $scope.loader = false;
                    if ($scope.qid == 6) {
                        window.location.href = 'medical-answers.html';
                    } else {
                        window.location.href = 'question.html?' + $scope.qid;
                    }

                }, function (data) {
                    pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
                });
            }
        } else {
            alert("please choose answer");
        }
    };


});

App.controller('contactController', function ($scope, $http, $interval, $localStorage) {
    
     $scope.faq = function () {
        window.location.href = 'faq.html';
    }
    $scope.home = function () {
        window.location.href = 'home.html';
    }
     $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }
    $scope.profile = function () {
        window.location.href = 'profile.html';
    }
    $scope.changePassword = function () {
        window.location.href = 'pageapp-update-password.html';
    }
    $scope.contact = function () {
        window.location.href = 'contact.html';
    }
    $scope.product = function () {
        window.location.href = 'product.html';
    }
    $scope.question = function () {
        window.location.href = 'medical-answers.html';
    }
    $scope.appointment = function () {
        window.location.href = 'pageapp-appointment.html';
    }
    $scope.invoice = function () {
        window.location.href = 'store-invoice.html';
    }
    $scope.logout = function () {
        window.localStorage.clear();
        location.href = "login.html";
    };
//    $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.loader = true;
    $http.get(App.api + "contact").then(function (response) {
        $scope.contact = response.data;
        $scope.loader = false;
    });
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }

    $scope.saveEnquery = function (enquery) {
        $scope.enquery = enquery;
        $scope.loader = true;
        if ($scope.enquery.name && $scope.enquery.email && $scope.enquery.message) {
            $http.post(App.api + "add/enquery", $scope.enquery).then(function (response) {
                $scope.myres = response.data;
                $scope.loader = false;
                alert('Your Enquery Add successfuly!', {'type': 'Success:', 'theme': 'green', 'delay': 3000});
                location.href = 'checkout.html';
                $scope.loading = false;
            }, function (data) {
                alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});
                $scope.loading = false;

            });
        } else {
            pagealert("All fields are required!", {'type': 'Error', 'theme': 'red', 'delay': 3000});
            $scope.loading = false;

        }
    };
});
App.controller('checkoutController', function ($scope, $http, $interval, $localStorage) {
     $scope.question = function () {
        window.location.href = 'question.html?' + 1;
    }
     $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.home = function () {
        window.location.href = 'home.html';
    }
    
      $scope.faq = function () {
        window.location.href = 'faq.html';
    }
    $scope.profile = function () {
        window.location.href = 'profile.html';
    }
    $scope.changePassword = function () {
        window.location.href = 'pageapp-update-password.html';
    }
    $scope.contact = function () {
        window.location.href = 'contact.html';
    }
    $scope.product = function () {
        window.location.href = 'product.html';
    }
    $scope.question = function () {
        window.location.href = 'medical-answers.html';
    }
    $scope.appointment = function () {
        window.location.href = 'pageapp-appointment.html';
    }
    $scope.invoice = function () {
        window.location.href = 'store-invoice.html';
    }
    $scope.logout = function () {
        window.localStorage.clear();
        location.href = "login.html";
    };
//     $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.user = $localStorage.currentuser;
    $scope.delivery = $localStorage.payment;
    $scope.carts = $localStorage.carts;
    $scope.total = $localStorage.total;
    $scope.grand_total = $localStorage.grand_total;
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.paypal = function () {
        window.location.href = 'thanku.html';
    }
//
//    paypal.Button.render({
//        env: 'production', // sandbox | production
//
//        // PayPal Client IDs - replace with your own
//        // Create a PayPal app: https://developer.paypal.com/developer/applications/create
//        client: {
//            //sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
//            production: 'AdRlNphT71HzLfpof0M26WWk113fHS-4HZlB24oE0HrkTXQX6E6HT-EF7KvzZOssD45v-E213-jqGuWu'
//        },
//        // Show the buyer a 'Pay Now' button in the checkout flow
//        commit: true,
//        // payment() is called when the button is clicked
//        payment: function (data, actions) {
//
//            // Make a call to the REST api to create the payment
//            return actions.payment.create({
//                payment: {
//                    transactions: [
//                        {
//                            amount: {total: $localStorage.advice.amount, currency: 'USD'}
//                        }
//                    ]
//                }
//            });
//        },
//        // onAuthorize() is called when the buyer approves the payment
//        onAuthorize: function (data, actions) {
//
//            // Make a call to the REST api to execute the payment
//            return actions.payment.execute().then(function () {
//                $scope.saveAdvice();
//            });
//        }
//
//    }, '#paypal-btn');

});
App.controller('productController', function ($scope, $http, $interval, $localStorage, $window) {
    
     $scope.question = function () {
        window.location.href = 'question.html?' + 1;
    }
     $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }
    $scope.home = function () {
        window.location.href = 'home.html';
    }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    
      $scope.faq = function () {
        window.location.href = 'faq.html';
    }
    $scope.profile = function () {
        window.location.href = 'profile.html';
    }
    $scope.changePassword = function () {
        window.location.href = 'pageapp-update-password.html';
    }
    $scope.contact = function () {
        window.location.href = 'contact.html';
    }
    $scope.product = function () {
        window.location.href = 'product.html';
    }
    $scope.question = function () {
        window.location.href = 'medical-answers.html';
    }
    $scope.appointment = function () {
        window.location.href = 'pageapp-appointment.html';
    }
    $scope.invoice = function () {
        window.location.href = 'store-invoice.html';
    }
    $scope.logout = function () {
        window.localStorage.clear();
        location.href = "login.html";
    };
//     $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.carts = [];
    $scope.init = function () {

    };
    $scope.selectedItems = [];

    $scope.rowSubmit = function (row) {
        $scope.submittedRow = row;
    };
    $scope.total = 0;

    $scope.setTotals = function (cart) {
        if (cart) {
            $scope.total += cart.price;
            $localStorage.total = $scope.total;
            $localStorage.grand_total = $scope.total + 11;
        }
    }
    $scope.submit = function (acc) {

//        console.log($scope.carts)
        $localStorage.carts = $scope.carts;
        location.href = 'delivery.html';

    };

    $scope.drug = function (payment) {
        if ($scope.payment) {
//        console.log($scope.payment)
            $localStorage.payment = $scope.payment;
            location.href = 'checkout.html';
        } else {
            alert('Please select Delivery Time')
        }
    };
    $scope.back = function () {
        window.location.href = 'product.html';

    }
    $scope.loader = true;
    $http.get(App.api + "all/products").then(function (response) {
        $scope.products = response.data;
        $scope.loader = false;
    }, function (data) {
        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});
    });
    $scope.add_cart = function (product) {
        if (product) {
            $scope.carts.push({id: product.id, name: product.name, price: product.price});
        }
    }

    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }

    $scope.remove_cart = function (cart) {
        if (cart) {
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.price;
        }
    }

});

App.controller('faqController', function ($scope, $http, $interval, $localStorage, $window) {
//  $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.loader = true;

    $http.get(App.api + "faq").then(function (response) {
        $scope.faqs = response.data;
        $scope.loader = false;

    }, function (data) {
        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});

    });

    $(".faq .q1").click(function () {
        $(this).parents(".faq").siblings(".faq .a1").hide();
        $(this).next(".a1").toggle();
    });
    $scope.home = function () {
        window.location.href = 'home.html';
    }
    $scope.question = function () {
        window.location.href = 'question.html?' + 1;
    }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    
      $scope.faq = function () {
        window.location.href = 'faq.html';
    }
    $scope.profile = function () {
        window.location.href = 'profile.html';
    }
    $scope.changePassword = function () {
        window.location.href = 'pageapp-update-password.html';
    }
    $scope.contact = function () {
        window.location.href = 'contact.html';
    }
    $scope.product = function () {
        window.location.href = 'product.html';
    }
    $scope.question = function () {
        window.location.href = 'medical-answers.html';
    }
    $scope.appointment = function () {
        window.location.href = 'pageapp-appointment.html';
    }
    $scope.invoice = function () {
        window.location.href = 'store-invoice.html';
    }
    $scope.logout = function () {
        window.localStorage.clear();
        location.href = "login.html";
    };
     $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }

});

App.controller('profileController', function ($scope, $http, $interval, $localStorage, $window) {
//    $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.user = $localStorage.currentuser;
//    console.log($scope.user);
    $scope.ProfileUpdate = function (user) {
        $scope.user = user;
        $scope.loader = true;
        if ($scope.user.first_name && $scope.user.last_name && $scope.user.mobile_number && $scope.user.email && $scope.user.address_1 && $scope.user.country && $scope.user.city && $scope.user.postcode && $scope.user.nric) {
            $http.post(App.api + "profile/update", $scope.user).then(function (response) {
                $scope.myres = response.data;
                $scope.loader = false;
                location.href = "login.html";
                alert('Your Profile updated successfully! please Login again !!', {'type': 'Success:', 'theme': 'green', 'delay': 3000});
                $window.localStorage.clear();



            }, function (data) {
                alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});

            });
        } else {
            alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});
        }


    };

    $scope.savePassword = function (user) {
        $scope.user = user;
        if ($scope.user.new_password && $scope.user.old_password && $scope.user.re_password) {
            $scope.loader = true;

            $http.post(App.api + "change/password", $scope.user).then(function (response) {
                $scope.myres = response.data;
                $scope.loader = false;
                location.href = "login.html";
                alert('Change Password successfully! please Login again !!', {'type': 'Success:', 'theme': 'green', 'delay': 3000});
                $window.localStorage.clear();
                location.href = "login.html";

            }, function (data) {
                alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});

            });
        } else {
            alert(data.data.message, {'type': 'Error', 'theme': 'red', 'delay': 3000});
        }

    }
    
    $scope.faq = function () {
        window.location.href = 'faq.html';
    }
    $scope.profile = function () {
        window.location.href = 'profile.html';
    }
    $scope.home = function () {
        window.location.href = 'home.html';
    }
    $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }
    $scope.changePassword = function () {
        window.location.href = 'pageapp-update-password.html';
    }
    $scope.contact = function () {
        window.location.href = 'contact.html';
    }
    $scope.product = function () {
        window.location.href = 'product.html';
    }
    $scope.question = function () {
        window.location.href = 'medical-answers.html';
    }
    $scope.appointment = function () {
        window.location.href = 'pageapp-appointment.html';
    }
    $scope.invoice = function () {
        window.location.href = 'store-invoice.html';
    }
    $scope.logout = function () {
        window.localStorage.clear();
        location.href = "login.html";
    };

});


App.controller('aboutController', function ($scope, $http, $interval, $localStorage, $window) {
//  $interval(function () {
//        $http.get(App.api + "user/notification", {id: $localStorage.notifi}).then(function (response) {
//            $scope.notification = response.data;
//            console.log(response.data); 
//                    if(response.data == 1){
//                       console.log(response.data.title); 
//                    }else{
//                      notificationCall(response.data.title)  
//                    }
//            if (response.data == 1) {
//
//            } else
////                toaster.pop('success', "You Have a new Notification", response.data.title);
//            $http.post(App.api + "add/user/notification", {id: response.data.id}).then(function (response) {
//                $scope.notification = response.data;
//            });
//        });
//    }, 20000);
//    function notificationCall(title){
//
//        function onShowNotification() {
//            console.log('notification is shown!');
//        }
//
//        function onCloseNotification() {
//            console.log('notification is closed!');
//        }
//
//        function onClickNotification() {
//            console.log('notification was clicked!');
//        }
//
//        function onErrorNotification() {
//            console.error('Error showing notification. You may need to request permission.');
//        }
//
//        function onPermissionGranted() {
//            console.log('Permission has been granted by the user');
//            doNotification();
//        }
//
//        function onPermissionDenied() {
//            console.warn('Permission has been denied by the user');
//        }
//
//        function doNotification() {
//             var myNotification = new Notify('You Have a new Notification', {
//            body: title,
//                    tag: "New Notification",
//                    notifyShow: onShowNotification,
//                    notifyClose: onCloseNotification,
//                    notifyClick: onClickNotification,
//                    notifyError: onErrorNotification,
//                    timeout: 12
//            });
//
//            myNotification.show();
//        }
//
//        if (!Notify.needsPermission) {
//            doNotification();
//        } else if (Notify.isSupported()) {
//            Notify.requestPermission(onPermissionGranted, onPermissionDenied);
//        }
//        }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    $scope.loader = true;

    $http.get(App.api + "about").then(function (response) {
        $scope.about = response.data;
        $scope.loader = false;
    }, function (data) {
        pagealert(data.data.message, {'type': 'Error', 'color': 'red', 'delay': 3000});

    });
    
    $scope.question = function () {
        window.location.href = 'question.html?' + 1;
    }
    $scope.home = function () {
        window.location.href = 'home.html';
    }
    $scope.about = function () {
        window.location.href = 'pageapp-about.html';
    }
    $scope.rederect = function () {
        window.location.href = 'page-status.html';
    }
    
      $scope.faq = function () {
        window.location.href = 'faq.html';
    }
    $scope.profile = function () {
        window.location.href = 'profile.html';
    }
    $scope.changePassword = function () {
        window.location.href = 'pageapp-update-password.html';
    }
    $scope.contact = function () {
        window.location.href = 'contact.html';
    }
    $scope.product = function () {
        window.location.href = 'product.html';
    }
    $scope.question = function () {
        window.location.href = 'medical-answers.html';
    }
    $scope.appointment = function () {
        window.location.href = 'pageapp-appointment.html';
    }
    $scope.invoice = function () {
        window.location.href = 'store-invoice.html';
    }
    $scope.logout = function () {
        window.localStorage.clear();
        location.href = "login.html";
    };

});


