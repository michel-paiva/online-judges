/* Accepted */
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(){
    char **sets;
    int instances, setsQuantity, setSize, item, instructionsQuantity, instruction, set1, set2, result, i, j, k;

    scanf("%d", &instances);

    for( i = 0; i < instances; i++){
        scanf("%d", &setsQuantity);
        sets = malloc(setsQuantity * sizeof(char *));

        for ( j = 0; j < setsQuantity; j++){
            sets[j] = malloc(61 * sizeof(char));
            memset(sets[j],0,sizeof(char) * 61);
        }
        
        for ( j = 0; j < setsQuantity; j++){
            scanf("%d",&setSize);
            for ( k = 0; k < setSize; k++){
                scanf("%d", &item);
                sets[j][item] = 1;
            }
        }
        scanf("%d", &instructionsQuantity);
        for ( j = 0; j < instructionsQuantity; j++){
            scanf("%d %d %d",&instruction, &set1, &set2);
            result = 0;
            for ( k = 0; k < 61; k++)
            {
                if(instruction == 1 && sets[set1-1][k] && sets[set2-1][k]){
                    result++;
                }
                if(instruction == 2 && (sets[set1-1][k] || sets[set2-1][k])){
                    result++;
                }
            }
            printf("%d\n", result);
        }

        for ( j = 0; j < setsQuantity; j++){
            free(sets[j]);
        }   
    }

    return 0;
}