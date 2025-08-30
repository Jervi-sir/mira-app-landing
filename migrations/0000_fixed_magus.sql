CREATE TABLE `registry` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`wilaya` text,
	`city` text,
	`role` text DEFAULT 'person' NOT NULL,
	`notes` text,
	`ip` text,
	`user_agent` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
