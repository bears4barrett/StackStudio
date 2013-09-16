/*!
 * StackStudio 2.0.0-rc.1 <http://stackstudio.transcendcomputing.com>
 * (c) 2012 Transcend Computing <http://www.transcendcomputing.com/>
 * Available under ASL2 license <http://www.apache.org/licenses/LICENSE-2.0.html>
 */
/*jshint smarttabs:true */
/*global define:true console:true */
define(
    'jquery-plugins'
    , [
        'jquery',
        '//code.jquery.com/jquery-migrate-1.1.0.js'
    ]
    , function(jQuery){
        require([
                 'jquery.coverscroll.min',
                 'jquery.purr'
                 ], function() {
        });

        // because plugins AUGMENT $, no point returning them separately
        // just return back the augmented jQuery reference.
        return jQuery;
    }
)
