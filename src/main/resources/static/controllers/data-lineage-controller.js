(function () {
  'use strict';

  angular
    .module('app')
    .controller('DataLineageController', DataLineageController);

  DataLineageController.$inject = ['EapAdminConnection'];

  function DataLineageController(EapAdminConnection) {
    var vm = this;
//    vm.dataLineage =
//    {"name":"JDV_ROOT","type":"SERVER","children":[{"name":"Financials","type":"VDB","children":[{"name":"All_Customers.ACCOUNT","type":"VIEW","children":[{"name":"EU_Customers_EDL.ACCOUNT","type":"VIEW","children":[{"name":"EU_Customers_VBL.ACCOUNT","type":"VIEW","children":[{"name":"EU_Customers.ACCOUNT","type":"TABLE","children":[{"name":"EU_Customers","type":"DATASOURCE","children":null,"jndiName":"java:jboss/datasources/EUCustomersDS"}]}]}]},{"name":"US_Customers_EDL.ACCOUNT","type":"VIEW","children":[{"name":"US_Customers_VBL.ACCOUNT","type":"VIEW","children":[{"name":"US_Customers.ACCOUNT","type":"TABLE","children":[{"name":"US_Customers","type":"DATASOURCE","children":null,"jndiName":"java:jboss/datasources/USCustomersDS"}]}]}]}]},{"name":"All_Customers.ACCOUNTHOLDINGS","type":"VIEW","children":[{"name":"EU_Customers_EDL.ACCOUNTHOLDINGS","type":"VIEW","children":[{"name":"EU_Customers_VBL.ACCOUNTHOLDINGS","type":"VIEW","children":[{"name":"EU_Customers.ACCOUNTHOLDINGS","type":"TABLE","children":[{"name":"EU_Customers","type":"DATASOURCE","children":null,"jndiName":"java:jboss/datasources/EUCustomersDS"}]}]}]},{"name":"US_Customers_EDL.ACCOUNTHOLDINGS","type":"VIEW","children":[{"name":"US_Customers_VBL.ACCOUNTHOLDINGS","type":"VIEW","children":[{"name":"US_Customers.ACCOUNTHOLDINGS","type":"TABLE","children":[{"name":"US_Customers","type":"DATASOURCE","children":null,"jndiName":"java:jboss/datasources/USCustomersDS"}]}]}]}]},{"name":"All_Customers.CUSTOMER","type":"VIEW","children":[{"name":"EU_Customers_EDL.CUSTOMER","type":"VIEW","children":[{"name":"EU_Customers_VBL.CUSTOMER","type":"VIEW","children":[{"name":"EU_Customers.CUSTOMER","type":"TABLE","children":[{"name":"EU_Customers","type":"DATASOURCE","children":null,"jndiName":"java:jboss/datasources/EUCustomersDS"}]}]}]},{"name":"US_Customers_EDL.CUSTOMER","type":"VIEW","children":[{"name":"US_Customers_VBL.CUSTOMER","type":"VIEW","children":[{"name":"US_Customers.CUSTOMER","type":"TABLE","children":[{"name":"US_Customers","type":"DATASOURCE","children":null,"jndiName":"java:jboss/datasources/USCustomersDS"}]}]}]}]}]},{"name":"JDV_PoC","type":"VDB","children":[{"name":"MatView_DS.report","type":"TABLE","children":[{"name":"MatView_DS","type":"DATASOURCE","children":null,"jndiName":"java:/MatView_XA_DS"}]},{"name":"MatView_DS.st_report","type":"TABLE","children":[{"name":"MatView_DS","type":"DATASOURCE","children":null,"jndiName":"java:/MatView_XA_DS"}]},{"name":"MatView_DS.status","type":"TABLE","children":[{"name":"MatView_DS","type":"DATASOURCE","children":null,"jndiName":"java:/MatView_XA_DS"}]},{"name":"PurchasingDepartment_VBL.salesTSV","type":"VIEW","children":[]},{"name":"Services.extmat_report","type":"VIEW","children":[{"name":"UnifiedView_FDL.report","type":"VIEW","children":[{"name":"ClientDepartment_EDL.CUSTOMER","type":"VIEW","children":[{"name":"ClientDepartment_VBL.CUSTOMER","type":"VIEW","children":[{"name":"ClientDepartment_DS.CUSTOMER","type":"TABLE","children":[{"name":"ClientDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"ClientDepartment_DS"}]}]}]},{"name":"PurchasingDepartment_EDL.Sales","type":"VIEW","children":[{"name":"PurchasingDepartment_VBL.Sales","type":"VIEW","children":[{"name":"PurchasingDepartment_DS.Sales","type":"TABLE","children":[{"name":"PurchasingDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"java:/PurchasingDepartment_DS"}]}]}]},{"name":"DrugDepartment_EDL.data","type":"VIEW","children":[{"name":"DrugDepartment_VBL.data","type":"VIEW","children":[{"name":"DrugDepartment_DS.data","type":"TABLE","children":[{"name":"DrugDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"java:/DrugDepartment_DS"}]}]}]}]}]},{"name":"Services.intmat_report","type":"VIEW","children":[{"name":"UnifiedView_FDL.report","type":"VIEW","children":[{"name":"ClientDepartment_EDL.CUSTOMER","type":"VIEW","children":[{"name":"ClientDepartment_VBL.CUSTOMER","type":"VIEW","children":[{"name":"ClientDepartment_DS.CUSTOMER","type":"TABLE","children":[{"name":"ClientDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"ClientDepartment_DS"}]}]}]},{"name":"PurchasingDepartment_EDL.Sales","type":"VIEW","children":[{"name":"PurchasingDepartment_VBL.Sales","type":"VIEW","children":[{"name":"PurchasingDepartment_DS.Sales","type":"TABLE","children":[{"name":"PurchasingDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"java:/PurchasingDepartment_DS"}]}]}]},{"name":"DrugDepartment_EDL.data","type":"VIEW","children":[{"name":"DrugDepartment_VBL.data","type":"VIEW","children":[{"name":"DrugDepartment_DS.data","type":"TABLE","children":[{"name":"DrugDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"java:/DrugDepartment_DS"}]}]}]}]}]},{"name":"Services.sales_by_customer","type":"VIEW","children":[{"name":"Services.detailed_sales_by_customer","type":"VIEW","children":[{"name":"Services.detailed_report","type":"VIEW","children":[{"name":"UnifiedView_FDL.report","type":"VIEW","children":[{"name":"ClientDepartment_EDL.CUSTOMER","type":"VIEW","children":[{"name":"ClientDepartment_VBL.CUSTOMER","type":"VIEW","children":[{"name":"ClientDepartment_DS.CUSTOMER","type":"TABLE","children":[{"name":"ClientDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"ClientDepartment_DS"}]}]}]},{"name":"PurchasingDepartment_EDL.Sales","type":"VIEW","children":[{"name":"PurchasingDepartment_VBL.Sales","type":"VIEW","children":[{"name":"PurchasingDepartment_DS.Sales","type":"TABLE","children":[{"name":"PurchasingDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"java:/PurchasingDepartment_DS"}]}]}]},{"name":"DrugDepartment_EDL.data","type":"VIEW","children":[{"name":"DrugDepartment_VBL.data","type":"VIEW","children":[{"name":"DrugDepartment_DS.data","type":"TABLE","children":[{"name":"DrugDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"java:/DrugDepartment_DS"}]}]}]}]}]}]}]},{"name":"Services.sales_by_day","type":"VIEW","children":[{"name":"Services.detailed_sales_by_day","type":"VIEW","children":[{"name":"Services.detailed_report","type":"VIEW","children":[{"name":"UnifiedView_FDL.report","type":"VIEW","children":[{"name":"ClientDepartment_EDL.CUSTOMER","type":"VIEW","children":[{"name":"ClientDepartment_VBL.CUSTOMER","type":"VIEW","children":[{"name":"ClientDepartment_DS.CUSTOMER","type":"TABLE","children":[{"name":"ClientDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"ClientDepartment_DS"}]}]}]},{"name":"PurchasingDepartment_EDL.Sales","type":"VIEW","children":[{"name":"PurchasingDepartment_VBL.Sales","type":"VIEW","children":[{"name":"PurchasingDepartment_DS.Sales","type":"TABLE","children":[{"name":"PurchasingDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"java:/PurchasingDepartment_DS"}]}]}]},{"name":"DrugDepartment_EDL.data","type":"VIEW","children":[{"name":"DrugDepartment_VBL.data","type":"VIEW","children":[{"name":"DrugDepartment_DS.data","type":"TABLE","children":[{"name":"DrugDepartment_DS","type":"DATASOURCE","children":null,"jndiName":"java:/DrugDepartment_DS"}]}]}]}]}]}]}]}]},{"name":"sample","type":"VDB","children":[{"name":"DataServiceLayer.service","type":"VIEW","children":[]}]},{"name":"SourceMetadataVDB","type":"VDB","children":[{"name":"SourceMetadata.Columns","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.DataTypes","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.FunctionParams","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Functions","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.KeyColumns","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Keys","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.MatViews","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.ProcedureParams","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Procedures","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Properties","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.ReferenceKeyColumns","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Schemas","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.StoredProcedures","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Tables","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Triggers","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Usage","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.VDBResources","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.Views","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]},{"name":"SourceMetadata.VirtualDatabases","type":"TABLE","children":[{"name":"PERSON","type":"DATASOURCE","children":null,"jndiName":"java:/PersonVDBDs"},{"name":"PORTFOLIO","type":"DATASOURCE","children":null,"jndiName":"java:/PortfolioVDBDs"}]}]}]} ;
    EapAdminConnection.getDataLineage().then(function (result) {
        vm.dataLineage = result;

    // Set the dimensions and margins of the diagram
    var margin = {top: 20, right: 90, bottom: 30, left: 90},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    var duration = 750;

    var zoom = d3.zoom()
        .scaleExtent([0.3, 1.5])
        .on("zoom", zoomed);

    var nodeWidth = 106;
    var nodeHeight = 106;

    var scaleLinear = d3.scaleLinear()
        .range([0, width]);

    var linkRadial = d3.linkRadial()
        .angle(function(d) { return d.x; })
        .radius(function(d) { return d.y; });

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("lineage-graph")
        .append("svg")
            .attr("width", "100%")
            .attr("height", height + margin.top + margin.bottom)
            .call(zoom)
        .append("g")
            .attr("transform", "translate("
                + margin.left + "," + margin.top + ")")
            ;

    var container = svg.append("g");

    // Per-type markers, as they don't inherit styles.
    svg.append("defs").selectAll("marker")
        .data(["usesin"])
      .enter().append("marker")
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 10)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
      .append("path")
        .attr("d", "M0,-5L10,0L0,5");

    var i = 0,
        duration = 750,
        root;

    // declares a tree layout and assigns the size
    var treemap = d3.tree().size([height, width]);

        // Assigns parent, children, height, depth
        root = d3.hierarchy(vm.dataLineage, function(d) { return d.children; });
        root.x0 = height / 2;
        root.y0 = 0;

        update(root);
        centerNode(root);

    // Zoom
    function zoomed() {
      container.attr("transform", d3.event.transform);
    }

    // Collapse the node and all it's children
    function collapse(d) {
      if(d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
      }
    }
    //Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    function centerNode(source) {
      var t = d3.zoomTransform(svg.node());
      var x = -source.y0;
      var y = -source.x0;
      x = x * t.k + width / 2;
      y = y * t.k + height / 2;
      d3.select('svg')
        .transition()
        .duration(duration)
        .call( zoom.transform, d3.zoomIdentity.translate(x,y).scale(t.k) );
    }

    // Update function
    function update(source) {

        var newHeight = Math.max(treemap(root).descendants().length * 30, height);

          d3.select("lineage-graph svg")
            .attr("width", "100%")
            .attr("height", newHeight + margin.top + margin.bottom);

          treemap = d3.tree().size([newHeight, width]);

          // Assigns the x and y position for the nodes
          var treeData = treemap(root);

          // Compute the new tree layout.
          var nodes = treeData.descendants();

        // Merge Nodes
        _.each(nodes, function (node, i) {
              var itemsOfTheSameDepth = _.filter(nodes, { depth: node.depth });
              var indexOfTheCurrentItem = _.indexOf(itemsOfTheSameDepth, node);
              var intervalPerDepth = 150;
              nodes[i].x = intervalPerDepth / 2 + intervalPerDepth * indexOfTheCurrentItem;
          });

        _.each(nodes, function (node, i) {
            var existingNodes = _.filter(nodes, function(p){ return (p.data.name == node.data.name);});

            if (existingNodes && existingNodes.length > 1) {
                var xAvgNode = _.reduce(existingNodes, function(memo, num) {return memo + num.x }, 0) / existingNodes.length;
                var maxDepthNode = _.max(existingNodes, function(p) {return p.depth});

                nodes[i].x = maxDepthNode.x;
                nodes[i].y = maxDepthNode.y;
                nodes[i].depth = maxDepthNode.depth;
            }
        });

      nodes.forEach(function(d){
        d.y = d.depth * 300;
       });

        var links = treeData.descendants().slice(1);

      // ***************************************************
      // ****************** Nodes section ******************
      // ***************************************************

      // Update the nodes...
      var node = container.selectAll('g.node')
          .data(nodes, function(d) {return d.id || (d.id = ++i); });

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
          .attr('class', 'node')
          .attr("transform", function(d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', centerNode)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

      // Add Rec for the nodes
      nodeEnter.append('circle')
          .attr('class', 'node')
          .attr('id', function(d) {
            return "node-" + d.data.name.replace(".", ""); })
          .attr('cx', nodeHeight / 2)
          .attr('cy', nodeWidth / 2 )
          .attr('r', 50)
          .style("fill", function(d) {
                var color = "#ccc";
                switch(d.data.type) {
                    case "SERVER":
                        color = "#ccc"
                        break;
                    case "VDB":
                        color = "#A9F5BC"
                        break;
                    case "TABLE":
                        color = "#A9E2F3"
                        break;
                    case "VIEW":
                        color = "#F5D0A9"
                        break;
                    case "DATASOURCE":
                        color = "#ccc"
                        break;
                };
              return color;
          });

      nodeEnter.append("foreignObject")
             .attr("width", nodeWidth)
             .attr("height", nodeHeight)
            .append("xhtml:span")
                .attr("class", function(d) {
                   var iconClass = "";
                   switch(d.data.type) {
                       case "SERVER":
                           iconClass = "pficon pficon-server"
                           break;
                       case "VDB":
                           iconClass = "fa fa-database"
                           break;
                       case "TABLE":
                           iconClass = "pficon pficon-builder-image"
                           break;
                       case "VIEW":
                           iconClass = "pficon pficon-build"
                           break;
                       case "DATASOURCE":
                           iconClass = "pficon pficon-network"
                           break;
                   };
                 return "icon " + iconClass;
                 });

      // Add labels for the nodes
      var nodeText = nodeEnter.append('text')
          .attr("dy", ".35em")
          .attr("x", nodeWidth / 2)
          .attr("y", nodeHeight + 10)
          .attr("text-anchor", "middle")
          .text(function(d) { return d.data.name; })

      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + d.y + "," + d.x + ")";
         });

      // Update the node attributes and style
      nodeUpdate.select('rect.node')
        .attr('width', nodeWidth)
        .attr('height', nodeHeight)
        .attr('cursor', 'pointer');


      // Remove any exiting nodes
      var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) {
              return "translate(" + source.y + "," + source.x + ")";
          })
          .remove();

      // On exit reduce the node circles size to 0
      nodeExit.select('rect')
        .attr('width', 1e-6)
        .attr('height', 1e-6);

      // On exit reduce the opacity of text labels
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);

      // ***************************************************
      // ****************** links section ******************
      // ***************************************************

      // Update the links...
      var link = container.selectAll('path.link')
          .data(links, function(d) { return d.id; });

      // Enter any new links at the parent's previous position.
      var linkEnter = link.enter().insert('path', "g")
          .attr("class", function(d){
             return (d.parent)
                ? "link link-" + d.data.name.replace(".", "") + d.parent.data.name.replace(".", "")
                : "link"
           })
          .attr('d', function(d){
            var o = {x: source.x0, y: source.y0}
            return diagonal(o, o)
          })
          .attr('marker-end', function(d,i){ return 'url(#usesin)' });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate.transition()
          .duration(duration)
          .attr('d', function(d){
          return diagonal(d, d.parent) })
          .attr('marker-end', function(d,i){ return 'url(#usesin)' });

      // Remove any exiting links
      var linkExit = link.exit().transition()
          .duration(duration)
          .attr('d', function(d) {
            var o = {x: source.x, y: source.y}
            return diagonal(o, o)
          })
          .remove();

      // Store the old positions for transition.
      nodes.forEach(function(d){
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(node, destination) {

        var sx = node.x,
            sy = node.y,
            dx = destination.x,
            dy = destination.y;

        var path = "M" + node.y + "," + (node.x + (nodeHeight / 2))
         + "C" + (node.y + destination.y + nodeWidth) / 2 + "," + (node.x + (nodeHeight / 2))
         + " " + (node.y + destination.y + nodeWidth) / 2 + "," + (destination.x + (nodeHeight / 2))
         + " " + (destination.y + nodeWidth) + "," + (destination.x + (nodeHeight / 2));

        return path;
      }

      // Toggle children on click.
      function handleDoubleClick(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
        update(d);
      }

      function handleMouseOver(d) {
              highlight_path(d,4, "#F59547");
      }

      function handleMouseOut(d) {
          highlight_path(d,2, "#ccc");
      }

      function highlight_path(node, stroke_width, stroke_color){

          var sameNodes = _.filter(nodes, function(p){
          return (p.data.name == node.data.name)
            && (p.x == node.x)
            && (p.y == node.y)
          });

          sameNodes.forEach(function(sameNode){
              highlight_node(sameNode, stroke_width, stroke_color);
              highlight_children_path(sameNode, stroke_width, stroke_color);
              highlight_parent_path(sameNode, stroke_width, stroke_color);
          });
      }

      function highlight_children_path(node, stroke_width, stroke_color){
          var children = node.children;
          if (children && children != 'undefined') {
              children.forEach(function(child) {
                  highlight_node(child, stroke_width, stroke_color);
                  highlight_children_path(child, stroke_width, stroke_color);
              });
          }
      }

      function highlight_parent_path(node, stroke_width, stroke_color){
          var parent = node.parent;
          if (parent && parent != 'undefined') {
              highlight_node(parent, stroke_width, stroke_color);
              highlight_parent_path(parent, stroke_width, stroke_color);
          }
      }

      function highlight_node(node, stroke_width, stroke_color){

          d3.selectAll("#node-" + node.data.name.replace(".", ""))
              .style("stroke-width", stroke_width)
              .style("stroke", stroke_color);

          if (node.parent) {
              d3.selectAll(".link-" + node.data.name.replace(".", "") + node.parent.data.name.replace(".", ""))
                            .style("stroke-width", stroke_width)
                            .style("stroke", stroke_color);
          }
      }
    }
   }); // End EapAdminConnection.getDataLineage
  }
})();
