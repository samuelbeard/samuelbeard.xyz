---
published: false
date: "2022-07-22"
title: "Websites for Non Web Developers - Part 1 - Domain Names"
tags: ['Coding', 'Web Development']
---

The internet offers a double-edged sword for individuals and small businesses: affordability at the cost of technical expertise, or user-friendliness at a premium. This series aims to demystify the inner workings of key internet components, empowering you to make informed and cost-effective decisions, ultimately reducing reliance on expensive management services.

# Domain Names
In this section, we'll dive into the world of domain names: what they are, what they *aren't*, and how to use them to your advantage.

Think of your domain name as the address of your online home. It's one of the cornerstones of your web presence, and potentially your business too. Once you've found and secured your ideal domain, holding onto it is crucial. Letting it expire could mean someone else snatching it up, leaving you without control. Even if you're working with freelancers, owning your domain is a wise move.

A domain name doesn't actually stick to your website or other online elements. It's more like a human-friendly signpost pointing visitors in the right direction, regardless of where your website is hosted.

## What is a domain name?
### Top-Level Domain (TLD)
This is the final part of your domain name, like `.com`, `.org`, or `.net`. There are also country-specific TLDs like `.co.uk` or `.ca`. The TLD is the most general part of the domain name, and it's the part that most people remember. For example, in `google.com`, the TLD is `.com`.

There are thousands of TLDs available, and new ones being created all the time. (Here)[https://data.iana.org/TLD/tlds-alpha-by-domain.txt] is a list of all the TLDs that are currently available. Some more unusual TLDs include `.ninja`, `.guru`, and `.pizza`.

> You could pick mybusiness.ninja and and be happy with it. It is worth mentioning, however, that `.com` is the most popular TLD and the one that people are most likely to type into their browser. If you're buying a domain, I recommend trying to get the `.com` version of your domain if it's available also. Even if you are going to use the `.ninja` domain for your main site, you should still get the `.com` version and redirect it to your main site.

### Second-Level Domain (SLD)
This is the part of the domain name that is specific to you. For example, in `google.com`, the second-level domain is `google`. It's the part of the domain name that you have the most control over.

### Subdomains
### Second level domain

### Subdirectories and Routes
### HTTP and HTTPS
The `http://` or `https://` that goes before your domain name in a brower isn't technically part of the domain name itself. It refers to the protocol used to access your website.
`http://` stands for "Hypertext Transfer Protocol" and means that the website was downloaded to your computer unencrypted.
`https://` stands for "Hypertext Transfer Protocol Secure" and means that the website was downloaded to your computer encrypted. If someone was monitoring your internet activity, they could not see the data being downloaded.

## Buying a domain name

## DNS (Domain Name Service)
### NS (Nameservers)
### A and AAAA Records
### CNAME Records
### MX Records
### TXT Records

## Proxies
This is a more advanced part of domain names that is mainly for security and/or load balancing.


---

If you're not a web developer, terms like DNS, nameservers, domains, and subdomains can sound technical and intimidating. However, understanding these concepts is crucial for anyone who wants to build a website or manage their online presence. In this article, we'll explain these terms in plain language and help you make sense of the different components that make up the internet.

DNS and Nameservers

DNS stands for Domain Name System, and it's essentially a directory service that translates human-readable domain names (like google.com) into IP addresses (like 172.217.10.174) that computers use to communicate with each other. When you enter a domain name into your browser, your computer contacts a DNS server to get the corresponding IP address, which then allows your computer to connect to the website.

Nameservers are the infrastructure that supports the DNS system. They're essentially servers that are responsible for storing and distributing DNS records, which tell computers how to connect to websites. When you register a domain name, you typically have to specify the nameservers that your domain will use to resolve DNS queries. Most web hosting providers offer nameservers as part of their service.

Domains and Subdomains

A domain is a unique name that identifies a website on the internet. For example, google.com is a domain name. Domains can be bought and registered through domain registrars, and you can use them to create a website, set up email addresses, and more.

A subdomain is a subset of a larger domain. For example, news.google.com is a subdomain of google.com. You can use subdomains to create separate websites or sections of your website that are related to your main domain. Subdomains can be set up using your hosting provider's control panel.

CNAME, A and MX Records

DNS records are used to specify how different types of requests should be handled for a given domain. There are several types of DNS records, but the most common ones are CNAME, A, and MX.

A CNAME record is used to map one domain name to another. For example, if you want blog.yourdomain.com to point to your WordPress site hosted at wordpress.com, you would create a CNAME record that maps blog.yourdomain.com to yourblog.wordpress.com.

An A record maps a domain name to an IP address. For example, if you want yourdomain.com to point to your web server's IP address, you would create an A record that maps yourdomain.com to your server's IP address.

An MX record is used to specify the mail server that should receive emails sent to your domain. For example, if you use Google Workspace for your email, you would create an MX record that points to Google's mail servers.

HTTP and HTTPS

HTTP (Hypertext Transfer Protocol) is the protocol that allows web browsers to communicate with web servers. It's the foundation of the World Wide Web and is used to transfer data between your browser and a website.

HTTPS is a secure version of HTTP that uses encryption to protect the data that's transferred between your browser and a website. When you connect to a website over HTTPS, the data is encrypted, which makes it much more difficult for hackers to intercept and steal sensitive information.

Proxies

A proxy server acts as an intermediary between your computer and the internet. When you connect to a website through a proxy server, your computer sends its request to the proxy server, which then sends the request to the website on your behalf. This can be useful if you want to hide your IP address or if you're trying to access a website that's blocked in your country.

Buying a Domain

If you want to buy a domain, you can do so through a domain registrar. There are many different registrars to choose from, but some of the most popular ones include GoDaddy, Namecheap, and Google Domains. When you buy a domain, you'll typically need to pay an annual fee to keep it registered in your name.

Once you have a domain, you'll need to set up hosting for your website. Web hosting is the service that allows you to store your website files on a server and make them accessible to the internet. There are many different types of hosting, including shared hosting (where multiple websites share the same server), dedicated hosting (where you have your own server), and cloud hosting (where your website is hosted on a virtual server). Your choice of hosting will depend on your needs and budget.

After you've set up hosting, you'll need to configure your DNS settings to point your domain to your hosting provider's server. This typically involves creating A records or CNAME records in your domain's DNS settings. Your hosting provider should provide instructions on how to do this.

Once your DNS settings are configured correctly, your website should be accessible using your domain name. You can then start building your website using a content management system like WordPress, or by coding it from scratch.

In conclusion, DNS, nameservers, domains, subdomains, CNAME, A, and MX records, HTTP, HTTPS, proxies, and buying a domain may seem like a lot of technical jargon, but they're essential components of the internet that anyone who wants to build a website or manage their online presence needs to understand. By learning these concepts, you'll be better equipped to navigate the online world and build a successful website.
