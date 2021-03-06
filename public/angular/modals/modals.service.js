(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('ModalService', ModalService);

    ModalService.$inject = ['$modal'];

    /* @ngInject */
    function ModalService($modal) {
        var service = {
            commentReply: commentReply,
            confirm: confirm,
            confirmDelete: confirmDelete,
            optionalUpload: optionalUpload,
            requestDocument: requestDocument,
            requiredUpload: requiredUpload
        };

        return service;

        //////////
        function commentReply(data) {
            var modalInstance = $modal.open({
                templateUrl: 'angular/comments/reply.modal.html',
                controller: 'ModalController',
                resolve: {
                    data: function(){
                        return {};
                    }
                },
                size: 'lg'
            });

            return modalInstance.result;
        }

        function confirm(data) {
            var modalInstance = $modal.open({
                templateUrl: 'angular/modals/confirm.modal.html',
                controller: 'ModalController',
                resolve: {
                    data: function(){
                        return {
                            title: data.title,
                            message: data.message,
                            buttons: data.buttons
                        };
                    }
                },
                size: 'sm'
            });

            return modalInstance.result;
        }

        function confirmDelete(data) {
            var modalInstance = $modal.open({
                templateUrl: 'angular/modals/confirm.delete.modal.html',
                controller: 'ModalController',
                resolve: {
                    data: function(){
                        return {};
                    }
                },
                size: 'sm'
            });

            return modalInstance.result;
        }

        function optionalUpload(data) {
            var modalInstance = $modal.open({
                templateUrl: 'angular/modals/upload.optional.modal.html',
                controller: 'ModalController',
                resolve: {
                    data: function(){
                        return {
                            loanID: data.loanID,
                            document: data.document,
                            filename: data.filename,
                            title: data.title,
                            buttons: data.buttons
                        };
                    }
                },
                size: 'sm'
            });

            return modalInstance.result;
        }

        function requestDocument(data) {
            var modalInstance = $modal.open({
                templateUrl: 'angular/modals/request.document.html',
                controller: 'ModalController',
                resolve: {
                    data: function(){
                        return {
                            loanID: data.loanID,
                            document: data.document,
                            filename: data.filename,
                            title: data.title,
                            buttons: data.buttons
                        };
                    }
                },
                size: 'sm'
            });

            return modalInstance.result;
        }

        function requiredUpload(data) {
            var modalInstance = $modal.open({
                templateUrl: 'angular/modals/upload.required.modal.html',
                controller: 'ModalController',
                resolve: {
                    data: function(){
                        return {
                            loanID: data.loanID,
                            document: data.document,
                            filename: data.filename,
                            title: data.title,
                            buttons: data.buttons
                        };
                    }
                },
                size: 'sm'
            });

            return modalInstance.result;
        }
    }
})();