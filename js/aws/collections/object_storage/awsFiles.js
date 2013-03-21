/*!
 * StackStudio 2.0.0-rc.1 <http://stackstudio.transcendcomputing.com>
 * (c) 2012 Transcend Computing <http://www.transcendcomputing.com/>
 * Available under ASL2 license <http://www.apache.org/licenses/LICENSE-2.0.html>
 */
/*jshint smarttabs:true */
/*global define:true console:true */
define([
        'jquery',
        'backbone',
        '/js/aws/models/object_storage/awsFile.js',
        'common'
], function( $, Backbone, File, Common ) {
    'use strict';

    // File Collection
    // ---------------

    var FileList = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: File,

        url: Common.apiUrl + '/stackstudio/v1/cloud_management/aws/object_storage/directory/files'
    });

    return FileList;

});
