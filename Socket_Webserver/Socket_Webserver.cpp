// Server.cpp : create a console application, and include the sources in the project
//
// 1. open the *.c in the Visual C++, then "rebuild all".
// 2. click "yes" to create a project workspace.
// 3. You need to -add the library 'ws2_32.lib' to your project 
//    (Project -> Properties -> Linker -> Input -> Additional Dependencies) 
// 4. recompile the source.

#include "stdafx.h"


#define DEFAULT_PORT	5780

void accept_conn(void *dummy) {
	SOCKET client = (SOCKET)dummy; // initialize a socket
	FILE* web;
	int ret;  // record the error code
	char buffer[4096] = { '\0' };
	char* response = "";
	char content[100];
	char header[200];
	char* path;
	char real_path[200];
	char initialize_header[200];
	ret = recv(client, buffer, sizeof(buffer), 0);  // get enquiry keyword
	if (ret == SOCKET_ERROR || strcmp(buffer, "") == 0) {
		fprintf(stderr, "recv() failed with error %d\n", WSAGetLastError());
		closesocket(client);
		return;
	}
	if (buffer[0] != 'G')
		return;
	for (int i = 0; ; i++) {
		if (buffer[i] == '\r' || buffer[i] == '\n') {
			header[i] = '\0';
			break;
		}
		header[i] = buffer[i];
	}
	path = split_path(header);
	if (path[0] == '\0') {
		path = "index.html";
	}
	strcpy(real_path, path);
	printf("Path: %s\t", real_path);
	web = fopen(real_path, "r");
	if (web == NULL) {
        response_404(client);
        closesocket(client);
        return;
	}
	fclose(web);
	ret = response_200(client, real_path);
	if (ret == -1) {
		printf("Connection failed\n");
	}
	else if (ret == 1) {
		printf("Connection successful. Now exiting...\n");
	}
	closesocket(client);
}

int main(int argc, char **argv) {
	char szBuff[100];
	int msg_len;
	int addr_len;
	struct sockaddr_in local, client_addr;

	SOCKET sock, msg_sock;
	WSADATA wsaData;
	if (WSAStartup(0x202, &wsaData) == SOCKET_ERROR) {
		// stderr: standard error are printed to the screen.
		fprintf(stderr, "WSAStartup failed with error %d\n", WSAGetLastError());
		//WSACleanup function terminates use of the Windows Sockets DLL. 
		WSACleanup();
		return -1;
	}
	// Fill in the address structure
	local.sin_family = AF_INET;
	local.sin_addr.s_addr = INADDR_ANY;
	local.sin_port = htons(DEFAULT_PORT);

	sock = socket(AF_INET, SOCK_STREAM, 0);	//TCp socket


	if (sock == INVALID_SOCKET) {
		fprintf(stderr, "socket() failed with error %d\n", WSAGetLastError());
		WSACleanup();
		return -1;
	}

	if (bind(sock, (struct sockaddr *)&local, sizeof(local)) == SOCKET_ERROR) {
		fprintf(stderr, "bind() failed with error %d\n", WSAGetLastError());
		WSACleanup();
		return -1;
	}

	//waiting for the connections
	if (listen(sock, 5) == SOCKET_ERROR) {
		fprintf(stderr, "listen() failed with error %d\n", WSAGetLastError());
		WSACleanup();
		return -1;
	}


	printf("Waiting for the connections ........\n");

	// At this point start multithread coding

	while (1) {
		addr_len = sizeof(client_addr);
		msg_sock = accept(sock, (struct sockaddr*)&client_addr, &addr_len);
		if (msg_sock == INVALID_SOCKET) {
			fprintf(stderr, "accept() failed with error %d\n", WSAGetLastError());
			break;
		}

		printf("accepted connection from %s, port %d\n",
			inet_ntoa(client_addr.sin_addr),
			htons(client_addr.sin_port));

		_beginthread(accept_conn, 0, (void*)msg_sock); // pass param to the thread function
	}
	closesocket(msg_sock);
	WSACleanup();
}

