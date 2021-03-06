/*
 * ******************************************************************************
 * Copyright (c) 2017 Red Hat, Inc. and others
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Red Hat Inc. - initial API and implementation
 *
 * ******************************************************************************
 */

'use strict';

angular.module('app').config([ '$routeProvider', function($routeProvider) {
  $routeProvider.when('/ops/:fid?', {
    templateUrl : 'partials/home.html',
    controller : 'HomeController'
  }).when('/exec/:fid?', {
      templateUrl : 'partials/exec/home.html',
      controller : 'ExecHomeController'
  }).when('/tech/tasks/:fid?', {
      templateUrl : 'partials/tech/tasks.html',
      controller : 'TechTasksController'
  }).otherwise({
    redirectTo : '/ops'
  });
}]);
