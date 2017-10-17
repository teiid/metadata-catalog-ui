(function () {
  'use strict';

  angular
    .module('app')
    .controller('ViewerController', ViewerController);

  ViewerController.$inject = ['$scope', '$interval', 'EapAdminConnection', ];

  function ViewerController($scope, $interval, EapAdminConnection) {
    var vm = this;

    $scope.VDBlineageData = {
                              "layout": {
                                "height": 500,
                                "nodeTypes": {
                                  "type1": {
                                    "r": 4,
                                    "stroke-width": 3
                                  },
                                  "type2": {
                                    "r": 6,
                                    "stroke-width": 1
                                  }
                                },
                                "heatmap": {
                                  "enabled": true,
                                  "colourScale": [[0, "orange"], [1, "green"]]
                                }
                              },
                              "data": [
                                {
                                  "name": "node_1A",
                                  "z": 9.7,
                                  "parent": null,
                                  "type": "type2"
                                },
                                {
                                  "name": "node_2A",
                                  "z": 0.5,
                                  "parent": "node_1A",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_3A",
                                  "z": 6.3,
                                  "parent": "node_2A",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_3B",
                                  "parent": "node_2A",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_3C",
                                  "z": 3.9,
                                  "parent": "node_2A",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_4A",
                                  "z": 7.8,
                                  "parent": "node_3A",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_4B",
                                  "z": 0.6,
                                  "parent": "node_3A",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_4C",
                                  "z": 4.9,
                                  "parent": "node_3B",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_4D",
                                  "z": 8.8,
                                  "parent": "node_3C",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_1B",
                                  "z": 3.6,
                                  "parent": null,
                                  "type": "type1"
                                },
                                {
                                  "name": "node_2B",
                                  "z": 3.6,
                                  "parent": "node_1B",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_2C",
                                  "z": 0.9,
                                  "parent": "node_1B",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_3D",
                                  "z": 7.8,
                                  "parent": "node_2B",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_3E",
                                  "z": 8.9,
                                  "parent": "node_2B",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_3F",
                                  "z": 1,
                                  "parent": "node_2B",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_3G",
                                  "z": 4.1,
                                  "parent": "node_2B",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_3H",
                                  "parent": "node_2C",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_4E",
                                  "z": 9.1,
                                  "parent": "node_3D",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_4F",
                                  "z": 0.7,
                                  "parent": "node_3E",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_4G",
                                  "z": 0.4,
                                  "parent": "node_3F",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_5A",
                                  "parent": "node_4E",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_5B",
                                  "parent": "node_4E",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_5C",
                                  "z": 8.8,
                                  "parent": "node_4F",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_6A",
                                  "z": 8.7,
                                  "parent": "node_5A",
                                  "type": "type2"
                                },
                                {
                                  "name": "node_7A",
                                  "z": 9.1,
                                  "parent": "node_6A",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_7B",
                                  "parent": "node_6A",
                                  "type": "type1"
                                },
                                {
                                  "name": "node_7C",
                                  "parent": "node_6A",
                                  "type": "type1"
                                }
                              ]
                            };




    EapAdminConnection.getVDBList()
        .then(function (result) {
            vm.vdbList = result;
            vm.vdbGraph = {
                "nodes": []
                , "links": []
            };

            vm.VDBlineageData = {
                "layout": {
                "height": 500,
                "nodeTypes": {
                  "type1": {
                    "r": 4,
                    "stroke-width": 3
                  },
                  "type2": {
                    "r": 6,
                    "stroke-width": 1
                  }
                },
                "heatmap": {
                  "enabled": true,
                  "colourScale": [[0, "orange"], [1, "green"]]
                }
              },
              "data": [{
                                                         "name": "node_1A",
                                                         "z": 9.7,
                                                         "parent": null,
                                                         "type": "type2"
                                                       }]
            };

            var radius = d3.scaleSqrt()
                            .range([0, 20]);
            var maxRadius = radius(5);
            var vdbRadius = radius(5);
            var viewRadius = radius(2);

            var zoom = d3.zoom()
                    .scaleExtent([1, 10])
                    .on("zoom", zoomed);

            var margin = {top: -5, right: -5, bottom: -5, left: -5},
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

            var svg = d3.select("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
//                .call(zoom)
                ;

            var container = svg.append("g");

            for (var k = 0; k < vm.vdbList.length; k++) {
                var vdbName = vm.vdbList[k].name;
                var models = vm.vdbList[k].models;

                break;
//                vm.vdbGraph.nodes.push({
//                        "id" : vdbName
//                        , "group" : "VDB"
//                        , "radius": vdbRadius
//                    });

                // Creating nodes
                for (var i = 0; i < models.length; i++) {
                    var modelName =  models[i]['name'];
                    var modelType =  models[i]['type'];

                    var newNode = {
                          "id" : vdbName.concat(".", modelName)
                         , "group" : modelType
                         , "radius": viewRadius
                     }

                    switch (newNode.group) {
                       case "PHYSICAL":
                            newNode.fy = (2 * height) / 3;
                            break;
                    }

                    if (_.findWhere(vm.vdbGraph.nodes, newNode) == null) {
                        vm.vdbGraph.nodes.push(newNode);
                    }

                };

                // Creating links
                for (var i = 0; i < models.length; i++) {
                    var modelName =  models[i]['name'];
                    var modelType =  models[i]['type'];
                    var ddl;

                    if (models[i]['ddl']!= 'undefined') {
                        ddl = models[i]['ddl'].split(";");
                    }

                    if (modelType == 'VIRTUAL' && ddl) {
                        for (var j = 0; j < vm.vdbGraph.nodes.length; j++) {
                            if (vm.vdbGraph.nodes[j].id.group != "VDB") {
                                var psource = vm.vdbGraph.nodes[j].id.split(".");
                                var psVdbName = psource[0];
                                var psModelName = psource[1];

                                if (psVdbName = vdbName) {
                                    ddl.forEach(function(oneDdl){
                                      if (oneDdl.includes(psModelName + ".")) {
                                          var newLink = {
                                                    "source": vdbName.concat(".", psModelName)
                                                    , "target": vdbName.concat(".", modelName)
                                                    , "value": 10
                                               };

                                          if (oneDdl.includes("CREATE VIEW")) {
                                              newLink.type = "READ";
                                              vm.vdbGraph.links.push(newLink);
                                          } /*else if (oneDdl.includes("CREATE TRIGGER")) {
                                            vm.vdbGraph.links.push({
                                                "source": vdbName + "." + psModelName
                                                , "target": vdbName + "." + modelName
                                                , "type": "WRITE"
                                                , "value": 5
                                            });
                                          }*/

                                      }
                                    })
                                }
                            }
                        }
                    }
                };

            };

            var color = d3.scaleOrdinal(d3.schemeCategory20);


            container.append("g")
                .attr("class", "x axis")
              .selectAll("line")
                .data(d3.range(0, width, 10))
              .enter().append("line")
                .attr("x1", function(d) { return d; })
                .attr("y1", 0)
                .attr("x2", function(d) { return d; })
                .attr("y2", height);

            container.append("g")
                .attr("class", "y axis")
              .selectAll("line")
                .data(d3.range(0, height, 10))
              .enter().append("line")
                .attr("x1", 0)
                .attr("y1", function(d) { return d; })
                .attr("x2", width)
                .attr("y2", function(d) { return d; });

            var simulation = d3.forceSimulation()
                .force(
                    "link", d3.forceLink()
                                .id(function(d) { return d.id; })
                                .distance(maxRadius * 3)
                                .strength(1)
                                .iterations(10)
                )
                .force("charge", d3.forceManyBody().strength(-30))
                .force("center", d3.forceCenter(width / 2, height / 2))
                .force("x", d3.forceX())
                .force("y", d3.forceY())
                .force("collide", d3.forceCollide().radius(maxRadius * 4 / 3));

            var link = container.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(vm.vdbGraph.links)
            .enter().append("line")
            .attr('marker-end','url(#arrowhead)')
            .attr("stroke-width", function(d) { return Math.sqrt(d.value); });


            var node = container.append("g")
                .attr("class", "nodes")
                .selectAll("circle")
                .data(vm.vdbGraph.nodes)
                .enter()
                .append("circle")
                .attr("r", function(d) { return d.radius; })
                .attr("fill", function(d) { return color(d.group); })
                .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

            node.append("title")
            .text(function(d) { return d.id; });

            var nodeLabel =
            container.selectAll("nodes")
            .data(vm.vdbGraph.nodes)
            .enter()
            .append("text")
                .text(function(d) { return (d.group === "VDB")? d.id : d.id.split(".")[1]; })
                .style("text-anchor", "middle")
                .style("fill", "#555")
                .style("font-family", "Arial")
                .style("font-size", 12);

            simulation
                .nodes(vm.vdbGraph.nodes)
                    .on("tick", ticked);

            simulation
                .force("link")
                    .links(vm.vdbGraph.links);

            function ticked(e) {
                link
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                node
                    .attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });

                nodeLabel
                    .attr("x", function(d) { return d.x; })
                    .attr("y", function(d) { return d.y + ((4 * d.radius) / 3); })
                    .call(wrap, 2);
            }

            function dragstarted(d) {
                if (!d3.event.active) {
                    simulation.alphaTarget(0.3).restart();
                }

                d.fx = d.x;
                if (d.group !== "PHYSICAL") {
                    d.fy = d.y;
                }
            }

            function dragged(d) {
                d.fx = d3.event.x;
                if (d.group !== "PHYSICAL") {
                    d.fy = d3.event.y;
                }
            }

            function dragended(d) {
                if (!d3.event.active) {
                    simulation.alphaTarget(0);
                }
                d.fx = null;
                if (d.group !== "PHYSICAL") {
                    d.fy = null;
                }
            }

            // Move vdb nodes to the top.
            function vdbOnTop(alpha) {
              return function(d) {
                if (d.group !== "VDB") return;

                var y = d.y - 0,
                    l = Math.sqrt(y * y),
                    r = vdbRadius;
                if (l != r) {
                  l = (l - r) / l * alpha;
                  d.y -= y *= l;
                }
              };
            }

            // Move physical nodes to the bottom.
            function dataSourceNodes(alpha) {
              return function(d) {
                if (d.group !== "PHYSICAL") return;

                d.y = (height / 2) + viewRadius;

//                var x = width - viewRadius,
//                    l = Math.sqrt(x * x),
//                    r = viewRadius;
//                if (l != r) {
//                  l = (l - r) / l * alpha;
//                  d.x -= x *= l;
//                }
              };
            }

            // Move d to be adjacent to the vdb node.
            function vdb(alpha) {
              return function(d) {
                if (d.group === "VDB") return;

                if (vm.vdbGraph.links.find(function(f) {
                        return f.source.id === d.id;
                    }
                )) return;

                var vdb = vm.vdbGraph.nodes.find(function(f) {
                        return f.group === "VDB" && f.id.split(".")[0] === d.id.split(".")[0];
                    }
                );

                if (vdb.id === d.id) return;

                var x = d.x - vdb.x,
                    y = d.y - vdb.y,
                    l = Math.sqrt(x * x + y * y),
                    r = d.radius + vdb.radius;
                if (l != r) {
                  l = (l - r) / l * alpha;
                  d.x -= x *= l;
                  d.y -= y *= l;
                  vdb.x += x;
                  vdb.y += y;
                }
              };
            }

            // Resolves collisions between d and all other circles.
            function collide(alpha) {
              var padding = 2 * maxRadius; // separation between same-color circles
              var clusterPadding = 5 * maxRadius; // separation between different-color circles

              var quadtree = d3.quadtree(vm.vdbGraph.nodes);
              return function(d) {
                var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
                    nx1 = d.x - r,
                    nx2 = d.x + r,
                    ny1 = d.y - r,
                    ny2 = d.y + r;
                quadtree.visit(function(quad, x1, y1, x2, y2) {
                  if (quad.point && (quad.point !== d)) {
                    var x = d.x - quad.point.x,
                        y = d.y - quad.point.y,
                        l = Math.sqrt(x * x + y * y),
                        r = d.radius + quad.point.radius + (d.id.split(".")[0] === quad.point.id.split(".")[0] ? padding : clusterPadding);
                    if (l < r) {
                      l = (l - r) / l * alpha;
                      d.x -= x *= l;
                      d.y -= y *= l;
                      quad.point.x += x;
                      quad.point.y += y;
                    }
                  }
                  return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                });
              };
            }

            function wrap(text, width) {
              text.each(function() {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.1, // ems
                    x = text.attr("x"),
                    y = text.attr("y"),
                    dx = parseFloat(text.attr("dx")),
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
                while (word = words.pop()) {
                  line.push(word);
                  tspan.text(line.join(" "));
                  if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                  }
                }
              });
            }

            function zoomed() {
                container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            }
        }); // End EapAdminConnection.getVDBList()

  }; // END function ViewerController
})();
