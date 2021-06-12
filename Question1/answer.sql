SELECT
  u1.ID,
  u1.UserName,
  u2.UserName ParentUserName
FROM `user` u1
LEFT JOIN `user` u2 ON u2.ID = u1.Parent
ORDER BY u1.ID;