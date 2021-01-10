#include<stdio.h>
#include<string.h>
#include<limits.h>
int bellmanFord(int graph[][3],int V,int E,int src){
	int  dis[V];
	int i,j,k;
	// memset(dist,INT_MAX,sizeof(dist));
	for(i=0;i<V;i++){

		// printf("%d\n",dist[0]);
		dis[i]=INT_MAX;
	}
	dis[src]=0;

	for (int i = 0; i < V - 1; i++) { 
  
        for (int j = 0; j < E; j++) { 
            if (dis[graph[j][0]] + graph[j][2] < 
                               dis[graph[j][1]]) 
                dis[graph[j][1]] =  
                  dis[graph[j][0]] + graph[j][2]; 
        } 
    } 

    //Checking for negative cycles

    for (int i = 0; i < E; i++) { 
        int x = graph[i][0]; 
        int y = graph[i][1]; 
        int weight = graph[i][2]; 
        if (dis[x] != INT_MAX && 
                   dis[x] + weight < dis[y]) 
            printf("Graph contains negative weight cycle");
          
    } 
  
    printf("Vertex Distance from Source"); 
    for (int i = 0; i < V; i++) 
        printf("\n%d\t\t%d",i,dis[i]);
} 




int main() 
{ 
    int V = 5; // Number of vertices in graph 
    int E = 8; // Number of edges in graph 
  
    // Every edge has three values (u, v, w) where 
    // the edge is from vertex u to v. And weight 
    // of the edge is w. 
    int graph[][3] = { { 0, 1, -1 }, { 0, 2, 4 }, 
                       { 1, 2, 3 }, { 1, 3, 2 },  
                       { 1, 4, 2 }, { 3, 2, 5 },  
                       { 3, 1, 1 }, { 4, 3, -3 } }; 
  
    bellmanFord(graph, V, E, 0); 
    return 0; 
}