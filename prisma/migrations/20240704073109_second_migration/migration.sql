-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Resource" ("category", "createdAt", "description", "file", "id", "image", "title", "userId") SELECT "category", "createdAt", "description", "file", "id", "image", "title", "userId" FROM "Resource";
DROP TABLE "Resource";
ALTER TABLE "new_Resource" RENAME TO "Resource";
CREATE INDEX "Resource_userId_idx" ON "Resource"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
