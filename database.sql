
CREATE TABLE `Admin` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `Email` VARCHAR(255) NOT NULL,
  `Name` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(255) NOT NULL,
  `Wallet` VARCHAR(255) NOT NULL,
  `Role` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `Users` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) NOT NULL,
  `Desc` TEXT,
  `url` VARCHAR(255),
  `email` VARCHAR(255),
  `wallet` VARCHAR(255),
  `facebook` VARCHAR(255),
  `twitter` VARCHAR(255),
  `network` VARCHAR(255),
  `dob` DATE,
  `profile_image` VARCHAR(255),
  `feature_image` VARCHAR(255),
  `address` VARCHAR(255),
  `city` VARCHAR(255),
  `state` VARCHAR(255),
  `zip` VARCHAR(20),
  `pronoun` VARCHAR(255),
  `status` VARCHAR(255),
  `date` DATE,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `setting` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `value` VARCHAR(255) NOT NULL,
  `desc` TEXT,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `user_actions` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT UNSIGNED,
  `listing_mode` VARCHAR(255),
  `listing_price` DECIMAL(10,2),
  `mint_mode` VARCHAR(255),
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
);

CREATE TABLE `network` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `symbol` VARCHAR(255) NOT NULL,
  `wallet` VARCHAR(255) NOT NULL
);

CREATE TABLE `nfts` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `creator_id` INT UNSIGNED,
  `owner_id` INT UNSIGNED,
  `description` TEXT,
  `image` VARCHAR(255),
  `metadata` TEXT,
  `price` DECIMAL(10,2),
  `status` VARCHAR(255),
  `collection` VARCHAR(255),
  `category` VARCHAR(255),
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`creator_id`) REFERENCES `Users` (`id`),
  FOREIGN KEY (`owner_id`) REFERENCES `Users` (`id`)
);

CREATE TABLE `collections` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `ower_id` INT UNSIGNED,
  `feature_image` VARCHAR(255),
  `desc` TEXT,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`ower_id`) REFERENCES `Users` (`id`)
);

CREATE TABLE `categories` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `tags` VARCHAR(255),
  `symbol` VARCHAR(255),
  `feature_image` VARCHAR(255)
);

CREATE TABLE `bids` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT UNSIGNED,
  `nft_id` INT UNSIGNED,
  `price` DECIMAL(10,2),
  `status` VARCHAR(255),
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`),
  FOREIGN KEY (`nft_id`) REFERENCES `nfts` (`id`)
);

CREATE TABLE `earning` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `source` VARCHAR(255),
  `amount` DECIMAL(10,2),
  `user_id` INT UNSIGNED,
  `desc` TEXT,
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
);

CREATE TABLE `transactions` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `buyer_id` INT UNSIGNED,
  `seller_id` INT UNSIGNED,
  `nft_id` INT UNSIGNED,
  `transaction_hash` VARCHAR(255),
  `price` DECIMAL(10,2),
  `transaction_date` DATE,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`buyer_id`) REFERENCES `Users` (`id`),
  FOREIGN KEY (`seller_id`) REFERENCES `Users` (`id`),
  FOREIGN KEY (`nft_id`) REFERENCES `nfts` (`id`)
);


-- Admin Table
INSERT INTO `Admin` (`Email`, `Name`, `Password`, `Wallet`, `Role`, `created_at`, `updated_at`) VALUES
('admin1@example.com', 'Admin1', 'password1', '0x3F5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE', 'admin', NOW(), NOW()),
('admin2@example.com', 'Admin2', 'password2', '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', 'admin', NOW(), NOW()),
('admin3@example.com', 'Admin3', 'password3', '0xD551234Ae421e3BCBA99A0Da6d736074f22192FF', 'admin', NOW(), NOW()),
('admin4@example.com', 'Admin4', 'password4', '0x564286362092D8e7936f0549571a803B203aAceD', 'admin', NOW(), NOW()),
('admin5@example.com', 'Admin5', 'password5', '0x4e83362442B8d1beC281594CEA3050c8EB01311C', 'admin', NOW(), NOW());

-- Users Table
INSERT INTO `Users` (`Firstname`, `Lastname`, `email`, `wallet`, `username`, `status`, `created_at`, `updated_at`) VALUES
('John', 'Doe', 'john@example.com', '0xB8c77482e45F1F44dE1745F52C74426C631bDD52', 'johnDoe', 'active', NOW(), NOW()),
('Jane', 'Doe', 'jane@example.com', '0x0D8775F648430679A709E98d2b0Cb6250d2887EF', 'janeDoe', 'active', NOW(), NOW()),
('Alice', 'Smith', 'alice@example.com', '0xE41d2489571d322189246DaFA5ebDe1F4699F498', 'aliceSmith', 'active', NOW(), NOW()),
('Bob', 'Johnson', 'bob@example.com', '0xB63B606Ac810a52cCa15e44bB4cB115702429861', 'bobJohnson', 'active', NOW(), NOW()),
('Charlie', 'Brown', 'charlie@example.com', '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 'charlieBrown', 'active', NOW(), NOW());

-- setting Table
INSERT INTO `setting` (`name`, `value`, `desc`, `created_at`, `updated_at`) VALUES
('Site Name', 'NFT Marketplace', 'The name of the site', NOW(), NOW()),
('Site Description', 'Buy and sell NFTs', 'Description of the site', NOW(), NOW()),
('Transaction Fee', '2.5', 'Percentage fee for each transaction', NOW(), NOW()),
('Minimum Price', '0.01', 'Minimum price for listing an NFT', NOW(), NOW()),
('Maximum Price', '10000', 'Maximum price for listing an NFT', NOW(), NOW());

-- user_actions Table
INSERT INTO `user_actions` (`user_id`, `listing_mode`, `listing_price`, `mint_mode`, `created_at`, `updated_at`) VALUES
(1, 'Direct', 1.00, 'Existing', NOW(), NOW()),
(2, 'Auction', 0.50, 'New', NOW(), NOW()),
(3, 'Direct', 0.75, 'Existing', NOW(), NOW()),
(4, 'Auction', 1.50, 'New', NOW(), NOW()),
(5, 'Direct', 1.25, 'Existing', NOW(), NOW());

-- nfts Table
INSERT INTO `nfts` (`name`, `creator_id`, `owner_id`, `description`, `image`, `metadata`, `price`, `status`, `collection`, `category`, `created_at`, `updated_at`) VALUES
('NFT 1', 1, 1, 'Description for NFT 1', 'image1.png', 'metadata1', 1.00, 'available', 'Collection 1', 'Category 1', NOW(), NOW()),
('NFT 2', 2, 2, 'Description for NFT 2', 'image2.png', 'metadata2', 0.50, 'sold', 'Collection 2', 'Category 2', NOW(), NOW()),
('NFT 3', 3, 3, 'Description for NFT 3', 'image3.png', 'metadata3', 0.75, 'available', 'Collection 3', 'Category 3', NOW(), NOW()),
('NFT 4', 4, 4, 'Description for NFT 4', 'image4.png', 'metadata4', 1.50, 'sold', 'Collection 4', 'Category 4', NOW(), NOW()),
('NFT 5', 5, 5, 'Description for NFT 5', 'image5.png', 'metadata5', 1.25, 'available', 'Collection 5', 'Category 5', NOW(), NOW());

-- collections Table
INSERT INTO `collections` (`name`, `ower_id`, `feature_image`, `desc`, `created_at`, `updated_at`) VALUES
('Collection 1', 1, 'feature1.png', 'Description for Collection 1', NOW(), NOW()),
('Collection 2', 2, 'feature2.png', 'Description for Collection 2', NOW(), NOW()),
('Collection 3', 3, 'feature3.png', 'Description for Collection 3', NOW(), NOW()),
('Collection 4', 4, 'feature4.png', 'Description for Collection 4', NOW(), NOW()),
('Collection 5', 5, 'feature5.png', 'Description for Collection 5', NOW(), NOW());

-- categories Table
INSERT INTO `categories` (`name`, `tags`, `symbol`, `feature_image`) VALUES
('Art', 'art, painting, sculpture', 'ART', 'art.png'),
('Music', 'music, song, album', 'MUS', 'music.png'),
('Virtual Real Estate', 'virtual, real estate, land', 'VRE', 'vre.png'),
('Collectibles', 'collectibles, items, exclusive', 'COL', 'collectibles.png'),
('Trading Cards', 'trading, cards, sports', 'TRC', 'trading_cards.png');

-- bids Table
INSERT INTO `bids` (`user_id`, `nft_id`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1.00, 'pending', NOW(), NOW()),
(2, 2, 1.00, 'accepted', NOW(), NOW()),
(3, 3, 1.00, 'rejected', NOW(), NOW()),
(4, 4, 1.00, 'pending', NOW(), NOW()),
(5, 5, 1.00, 'accepted', NOW(), NOW());

-- earning Table
INSERT INTO `earning` (`source`, `amount`, `user_id`, `desc`, `created_at`, `updated_at`) VALUES
('Sale', 1.00, 1, 'Earnings from sale', NOW(), NOW()),
('Sale', 0.50, 2, 'Earnings from sale', NOW(), NOW()),
('Sale', 0.75, 3, 'Earnings from sale', NOW(), NOW()),
('Sale', 1.50, 4, 'Earnings from sale', NOW(), NOW()),
('Sale', 1.25, 5, 'Earnings from sale', NOW(), NOW());

-- transactions Table
INSERT INTO `transactions` (`buyer_id`, `seller_id`, `nft_id`, `transaction_hash`, `price`, `transaction_date`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'hash1', 1.00, NOW(), NOW(), NOW()),
(2, 3, 2, 'hash2', 0.50, NOW(), NOW(), NOW()),
(3, 4, 3, 'hash3', 0.75, NOW(), NOW(), NOW()),
(4, 5, 4, 'hash4', 1.50, NOW(), NOW(), NOW()),
(5, 1, 5, 'hash5', 1.25, NOW(), NOW(), NOW());



CREATE INDEX idx_username ON `Users`(`username`);
CREATE INDEX idx_email ON `Users`(`email`);
CREATE INDEX idx_wallet ON `Users`(`wallet`);

CREATE INDEX idx_user_actions_userid ON `user_actions`(`user_id`);

CREATE INDEX idx_nfts_creatorid ON `nfts`(`creator_id`);
CREATE INDEX idx_nfts_ownerid ON `nfts`(`owner_id`);
CREATE INDEX idx_nfts_name ON `nfts`(`name`);
CREATE INDEX idx_nfts_status ON `nfts`(`status`);
CREATE INDEX idx_nfts_collection ON `nfts`(`collection`);
CREATE INDEX idx_nfts_category ON `nfts`(`category`);

CREATE INDEX idx_collections_owerid ON `collections`(`ower_id`);

CREATE INDEX idx_bids_userid ON `bids`(`user_id`);
CREATE INDEX idx_bids_nftid ON `bids`(`nft_id`);

CREATE INDEX idx_earning_userid ON `earning`(`user_id`);

CREATE INDEX idx_transactions_buyerid ON `transactions`(`buyer_id`);
CREATE INDEX idx_transactions_sellerid ON `transactions`(`seller_id`);
CREATE INDEX idx_transactions_nftid ON `transactions`(`nft_id`);

