// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract CosmoNft is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string private _baseTokenURI;

    constructor(string memory name, string memory symbol, string memory baseTokenURI) ERC721(name, symbol) Ownable(msg.sender) {
        _baseTokenURI = baseTokenURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function mint() external {
        uint256 tokenId = totalSupply() + 1;
        _safeMint(msg.sender, tokenId);
    }
}
