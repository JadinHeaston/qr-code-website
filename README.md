# QR Code Website

## Purpose

Develop an interface to create and manage QR code redirects for an internal organization.

## Installation

### Pre-requisites

Installation and configuration of the required software is out of scope. Below are provided instructions that could aid you.

[PHP](https://www.php.net/manual/en/install.php)  
[Apache](https://httpd.apache.org/docs/2.4/install.html)/[NGINX](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)  

### Instructions

1. Download this repository.
2. Extract the files to the desired folder.
    - Ensure that all pre-requisites software is installed and configured appropriately.
3. Create a copy of ```/phpLiteAdmin/phpliteadmin.config.sample.php``` in the same directory and name it ```/phpLiteAdmin/phpliteadmin.config.php```.
4. **Change the password variable in the new config file to the desired administrator password on ```line 13```.**
    - You can also define the theme on ```line 38``` by entering the path to a ```.css``` file.
5. TBD

## Usage

All QR Codes follow the pattern of ```<DOMAIN>/QR/<DESIRED_PATH>```.  
The ```/QR/``` is needed for PHP to know when a given request is meant to be redirected or not.  
Any other request (that isn't a valid page of this site) will be immediately dropped.  

## Desired Features

| Feature | Description | Status |
| --- | --- | --- |
| QR Code Generation | Allow generation of QR Codes of simple strings. |✔️ |
| Database Administration | A method of managing SQLite database(s). The option to connect to remote databases will be included to. | ❌ |
| Users | Users can be required to access and utilize the page, or just needed for administration. | ❌ |
| Groups | A default group will be applied to all visitors, unless logged in. This feature allows for organization of people. |❌|
| Redirection Page | This page will take in a provided URL and redirect it based on the SQLite database. | ❌ |
| Redirection System | A system needs created that handles generating random URLs based on Administrator provided masks, and functions to create database entries that map them. | ❌ |

## Licensing

### js-qrcode

js-qrcode is used to generate the actual QR Codes and display them on the screen.  
[Check them out!](https://github.com/chillerlan/js-qrcode)

### phpLiteAdmin

phpLiteAdmin is used to allow easy SQLite database management.  
[Check them out!](https://www.phpliteadmin.org/)

## Trademark Notice

The word "QR Code" is a [registered trademark](https://www.qrcode.com/en/faq.html#patentH2Title) of DENSO WAVE INCORPORATED
