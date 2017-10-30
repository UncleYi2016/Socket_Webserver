#include "stdafx.h"

char* expand_string(char *source_string, char* target_string, int malloc_string) {
	int s_str_len = strlen(source_string);
	int t_str_len = strlen(target_string);
	char* new_string = (char *)malloc(sizeof(char) * (s_str_len + t_str_len + 4));
	char* freePt = "";
	strcpy(new_string, "");
	strcat(new_string, source_string);
	strcat(new_string, target_string);
	if (malloc_string) {
		free(source_string);
	}
	return new_string;
}