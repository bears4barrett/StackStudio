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
        'aws/models/cloud_watch/awsMetricStatistic',
        'common'
], function( $, Backbone, MetricStatistic, Common ) {
    'use strict';

    // MetricStatistic Collection
    // ---------------

    var MetricStatisticList = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: MetricStatistic,

        url: Common.apiUrl + '/stackstudio/v1/cloud_management/aws/monitor/metric_statistics'
    });
    
    // Create our global collection of **MetricStatistic**.
    return MetricStatisticList;

});
