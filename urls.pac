function FindProxyForURL(url, host) {
    // Instagram routes
    if (shExpMatch(host, "*.instagram.com") ||
        dnsDomainIs(host, "instagram.com") ||
        dnsDomainIs(host, "cdninstagram.com")) {
        return "PROXY <VPN-IP>:<PORT>";
    }
    return "DIRECT";
}
