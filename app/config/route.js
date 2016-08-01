/**
 * Created by Seamy on 7/31/2016.
 */





angular.module('kachicode', ['ui.router', 'ui.bootstrap'])


    .config(function ($stateProvider, $urlRouterProvider){

        'use strict';


        $urlRouterProvider.otherwise("/");

        $stateProvider

            .state('home', {

                url: '/',
                templateUrl: 'home.html',
                controller: 'indexCtrl',
                controllerAs: 'ctrl'


            })


            .state('about', {

                url: '/about',
                templateUrl: 'about.html'

            })

            .state('contact', {

                url: '/contact',
                templateUrl: 'kachicode/contact.html'


            });


    });