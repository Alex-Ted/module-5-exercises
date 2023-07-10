

SELECT
  customer.first_name,
  customer.last_name,
  CONCAT(address.district, ', ', address.postal_code) AS district_postal_code
FROM
  customer
JOIN
  address ON customer.address_id = address.address_id
WHERE
  address.district <> '' AND address.postal_code <> ''
LIMIT 15;