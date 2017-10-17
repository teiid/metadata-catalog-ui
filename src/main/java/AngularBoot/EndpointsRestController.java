package AngularBoot;

import java.util.List;

import AngularBoot.lineage.ServerNode;
import AngularBoot.model.Datasource;
import AngularBoot.model.VirtualDataBase;
import org.jboss.dmr.ModelNode;
import org.springframework.web.bind.annotation.*;
import org.teiid.adminapi.VDB;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class EndpointsRestController {

	@RequestMapping(value = "/endpoints/datasources", method = GET)
	public @ResponseBody
	List<String> getDatasources() throws Exception {

		return ManagementAPI.getDataSources();

	}

	@RequestMapping(value = "/endpoints/vdbs", method = GET)
	public @ResponseBody List<VDB> getVDBs() throws Exception {
		return ManagementAPI.getVDBs();
	}

	@RequestMapping(value = "/endpoints/datalineage", method = GET)
	public @ResponseBody ServerNode getDataLineage() throws Exception {
		return ManagementAPI.getDataLineage();
	}
}
