## commands

### Build the docker image

`docker image build . -t amithbrs/my_node_app:v2.0.0`

### Push the docker image which was build

`docker push amithbrs/my_node_app:v2.0.0`

### Create a k8s deployment with a name

`kubectl create deployment expressapp --image=amithbrs/my_node_app:v2.0.0 --replicas=3`

### Expose the deployment as type Loadbalancer

`kubectl expose deployment expressapp --port='3000' --target-port='3000' --type=LoadBalancer`

`--port` - Host port on which the service is exposed<br/>
`--target-port` - Port through which the services are listening internally

other types

- `--type=ClusterIP`
- `--type=NodePort`
- `--type=ExternalName`

### Upscale a k8s deployment with replicas

`kubectl scale deployment expressapp --replicas=5`

### Get all the available k8s replicaset

`kubectl get replicaset`

### Update the image in deployment

`kubectl set image deployment expressapp my-node-app-dd8zp=amithbrs/my_node_app:v2.0.0`

The container name(ex: `my-node-app-dd8zp`) should match the running container

#### To get the container name for a given pod run below command

`kubectl get pods expressapp-cf9b7d576-chqxs -o=jsonpath='{.spec.containers[*].name}'`

This will try to download the new image and start the replicaset with previously given amount of replicaset, if it is succedded then it will terminate the old pods which are running in old replicaset

### Get all the available k8s services

`kubectl get svc`

### If running the k8s on single node minikube, you can expose the service by tunneling with below command

`minikube service expressapp`

### Get sorted events

`kubectl get events --sort-by='.lastTimestamp'`

### To delete all the instance of deployment, service and pods at one go that relate to same label

`kubectl delete all -l app=expressapp`

### Create a deployment or service with yml file

`kubectl apply -f deployment.yml`